import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ViewAllQuestionsButton from '../components/ViewAllQuestionsButton';
import QuestionForm from '../components/QuestionForm';

const HomeContainer = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ccc;
  color: floralwhite;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 350px;
  margin-right: auto;
`;

const QuestionFormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const navigate = useNavigate();

  const viewAllQuestions = () => {
    navigate("/ViewAllQuestions");
  };

  return (
    <HomeContainer>
      <Sidebar>
        <ViewAllQuestionsButton onClick={viewAllQuestions} />
      </Sidebar>
      <QuestionFormContainer>
        <QuestionForm />
      </QuestionFormContainer>
    </HomeContainer>
  );
}

export default Home;
