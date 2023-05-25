// omar's show all users/profiles ours will be questions w/ link to look at comments for each question

import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS } from '../utils/queries/questionQueries';
import styled from 'styled-components';

// Styled-components|| future dev: change bootstrap styling to vanilla CSS
const CardHeader = styled.h4`
  background-color: #DF6301;
  width:100%;
  color: white;
  padding: 1rem;
  margin: 0px;
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 2rem;
  width:100%
`;
const CardContainer = styled.div`
background-color: white;
  border: 1px solid #DF6301;
  padding: 0px 0px 0px;
  margin: 10px 20px;
  font-size: 20px;
  text-align: left;
  width:90%;
`;
const CardHolder = styled.div`
display: grid;
grid-template-columns: auto auto;
width: 90%;
margin: 10px 20px;
background-color: #FFFFFF;
padding: 40px;
`;

const WhiteText = styled.span`
  background-color:white;
  padding:0.5rem;
  display:block;
  width: 100%;
  color: #DF6301;
  font-size: 1rem;
  aling-items: center
`;

const Button = styled(Link)`
display: block;
width: 100%;
background-color: #DF6301;
color: white;
text-align: center;
padding: 0.5rem 1rem;
margin-top: 0.5rem;
`;

const QuestionList = () => {
// Fetching questions data using the GET_QUESTIONLIST query
const { loading, error, data } = useQuery(GET_QUESTIONS);
const questions = data?.questions ||[]
console.log(questions);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error </p>;

// Ensure data and data.questionList exist before trying to access data.questionList.questions
if (!data || !data.questions || !data.questions.length===0) {
  return <h3>No Questions Yet</h3>;
}

  return (
    <QuestionContainer>
      <h3 className="text-primary">Questions</h3>
      <CardHolder>
        {data.questions.map((question) => (
          <CardContainer key={question._id} className="">
            <div className="">
              <CardHeader>
                {question.questionText}
              </CardHeader>
              <WhiteText>Question By: {question.questionAuthor}</WhiteText>

              <Button className='button' to={`/questions/${question._id}`}>
                View and answer this question.
              </Button>

              <Button className='button' to={`/questions/${question._id}/comments`}>
                View Comments
              </Button>
            </div>
          </CardContainer>
        ))}
      </CardHolder>
    </QuestionContainer>
  );
};

export default QuestionList;
