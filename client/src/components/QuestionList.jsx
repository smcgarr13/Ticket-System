// omar's show all users/profiles ours will be questions w/ link to look at comments for each question

import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS } from '../utils/queries/questionQueries';
import styled from 'styled-components';

// Styled-components
const CardHeader = styled.h4`
  background-color: dark;
  color: light;
  padding: 2rem;
  margin: 0;
`;

const WhiteText = styled.span`
  color: white;
  font-size: 1rem;
`;

const Button = styled(Link)`
  display: block;
  width: 100%;
  background-color: light;
  color: dark;
`;

const QuestionList = () => {
// Fetching questions data using the GET_QUESTIONLIST query
console.log(useQuery(GET_QUESTIONS));
const { loading, error, data } = useQuery(GET_QUESTIONS);
const questions = data?.questions ||[]
console.log(questions);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error </p>;

// Ensure data and data.questionList exist before trying to access data.questionList.questions
if (!data || !data.questions || !data.questions.length) {
  return <h3>No Questions Yet</h3>;
}

  return (
    <div>
      <h3 className="text-primary"></h3>
      <div className="flex-row justify-space-between my-4">
        {data.questions.map((question) => (
          <div key={question._id} className="col-12 col-xl-6">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
