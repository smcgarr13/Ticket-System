import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUESTION } from '../utilsClient/mutations/questionMutations';

const QuestionForm = () => {
  const [questionState, setQuestion] = useState({ questionAuthor: '', questionText: ''});
  const [addQuestion, { error }] = useMutation(ADD_QUESTION);

  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(questionState);
    try {
      const data = await addQuestion({
        variables: {
          questionAuthor: questionState.questionAuthor,
          questionText: questionState.questionText
        }

       
      });
      console.log(data);
      setQuestion({ questionAuthor: '', questionText: '' });

    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setQuestion({
      ...questionState,
      [name]: value
    });

  };
  
    return (
      <div className="container-question">
        <h2>Submit a New Question</h2>
        <form className="question-form" onSubmit={handleFormSubmit}>
          <div className="input-container">
            <input
              className="form-control"
              type="text"
              name="questionAuthor"
              placeholder="Username"
              value={questionState.questionAuthor}
              onChange={handleChange}
              required
            />
            <input
              className="form-control"
              type="text"
              name="questionText"
              placeholder="Question"
              value={questionState.questionText}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        {error && <div>There was an error adding your question, please try again.</div>}
      </div>
    );
  };
  
  export default QuestionForm;

