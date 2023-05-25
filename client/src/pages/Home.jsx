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
  background-color:   #ccc;
  color: floralwhite;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 350px;
  margin: 20px;
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









// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import ViewAllQuestionsButton from '../components/ViewAllQuestionsButton';
// import QuestionForm from '../components/QuestionForm';

// const HomeContainer = styled.div`
//   display: flex;
// `;

// const Sidebar = styled.div`
//   flex: 1;
//   height: 100vh;
// `;

// const QuestionFormContainer = styled.div`
//   flex: 1;
//   height: 100vh;
// `;

// function Home() {
//   const navigate = useNavigate();

//   const viewAllQuestions = () => {
//     navigate("/questionList");
//   };

//   return (
//     <HomeContainer>
//       <Sidebar>
//         <ViewAllQuestionsButton onClick={viewAllQuestions} />
//       </Sidebar>
//       <QuestionFormContainer>
//         <QuestionForm />
//       </QuestionFormContainer>
//     </HomeContainer>
//   );
// }

// export default Home;






// import React from 'react';
// import ViewAllQuestionsButton from '../components/ViewAllQuestionsButton';
// import QuestionForm from '../components/QuestionForm';
// import '../index.css';

// function Home() { 
//   const viewAllQuestions = () => {
//     // Redirect user to view all questions page
//   };

//   return (
//     <div className="home-container">
//        <div className="sidebar">
//         <ViewAllQuestionsButton onClick={viewAllQuestions} />
//       </div>
//       <div>
//         <QuestionForm />
//       </div>
//     </div>
//   );
// }

// export default Home;





// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import '../index.css';

// function Home({ children }) { 
//   return (
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Randy's Booth Co</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
//       </head>
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// export default Home;