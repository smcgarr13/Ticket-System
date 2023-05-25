// omar's show all users/profiles ours will be questions w/ link to look at comments for each question

import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_QUESTIONS, GET_SINGLEQUESTION } from '../utils/queries/questionQueries';
import { REMOVE_QUESTION } from '../utils/mutations/questionMutations'
import styled from 'styled-components';

// Styled-components
const CardHeader = styled.h4`
  background-color: blue;
  width:100px;
  color: light;
  padding: 2rem;
  margin: 0;
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 2rem;
`;
const CardContainer = styled.div`
width: 100%
background-color: green;
`;
const CardHolder = styled.div`
  align-items: center;
  width: 100%;
  max-width: 900px;
`;

const WhiteText = styled.span`
  color: white;
  font-size: 1rem;
  aling-items: center
`;

const Button = styled(Link)`
display: block;
width: 100%;
background-color: light;
color: dark;
text-align: center;
padding: 0.5rem 1rem;
margin-top: 0.5rem;
`;

const QuestionList = () => {
  // Fetching questions data using the GET_QUESTIONLIST query
  const { loading, error, data } = useQuery(GET_QUESTIONS);
  // Remove Question
  const [deleteQuestion] = useMutation(REMOVE_QUESTION, {
    update(cache, { data: { deleteQuestion } }) {
      try {
        cache.writeQuery({
          query: GET_SINGLEQUESTION,
          data: { question: deleteQuestion },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const questions = data?.questions || []
  console.log(questions);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  const handleRemoveQuestion = async (id) => {
    try {
      const { data } = await deleteQuestion({
        variables: { id },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  // Ensure data and data.questionList exist before trying to access data.questionList.questions
  if (!data || !data.questions || !data.questions.length === 0) {
    return <h3>No Questions Yet</h3>;
  }

  return (
    <QuestionContainer>
      <h3 className="text-primary">Questions</h3>
      <CardHolder>
        {data.questions.map((question) => (
          <CardContainer key={question._id} className="col-12 col-xl-6">
            <div className="card mb-3">
              <CardHeader>
                {question.questionText} <br />
                <WhiteText>asked by {question.questionAuthor}</WhiteText>
              </CardHeader>

              <Button to={`/questions/${question._id}`}>
                View and answer this question.
              </Button>

              <Button to={`/questions/${question._id}/comments`}>
                View Comments
              </Button>
              <Button onClick={() => handleRemoveQuestion(question._id)}>
                Delete Question
              </Button>

            </div>
          </CardContainer>
        ))}
      </CardHolder>
    </QuestionContainer>
  );
};

export default QuestionList;
