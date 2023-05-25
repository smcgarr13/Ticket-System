import React from 'react';
import QuestionList from '../components/QuestionList';

function ViewAllQuestions() {
  return (
    <div>
      <h2>Here are all the questions submitted so far: </h2>
      <QuestionList />
    </div>
  );
}

export default ViewAllQuestions;
