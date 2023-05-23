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






// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import styled from 'styled-components';
// import QuestionList from '../components/QuestionList';
// import '../index.css';

// // const ViewAllQuestionsContainer = styled.div`
// //   display: flex;
// // `;

// // const Sidebar = styled.div`
// //   flex: 1;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   padding: 20px;
// //   background-color: #ccc;
// //   color: floralwhite;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   width: 600px;
// //   height: 350px;
// //   margin-right: auto;
// // `;

// // const QuestionFormContainer = styled.div`
// //   flex: 1;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// function ViewAllQuestions() {
//   const navigate = useNavigate();

//   const ViewAllQuestions = () => {
//     navigate("/ViewAllQuestions");
//   };

//   return (
//     <ViewAllQuestions Container>
//       <div>
//         <QuestionList />
//         <h2>Here are all the questions submitted so far: </h2>
//       </div>
//     </ViewAllQuestions>
//   );
// }

// export default ViewAllQuestions;