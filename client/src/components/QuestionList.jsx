// omar's show all users/profiles ours will be questions w/ link to look at comments for each question

// Importing required modules and components
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS } from '../utils/queries/questionListQueries'; // Make sure to use the correct query file
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

// QuestionsList component
const QuestionsList = ({ title }) => {
  // Fetching questions data using the GET_QUESTIONS query
  const { loading, error, data } = useQuery(GET_QUESTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data.questions.length) {
    return <h3>No Questions Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {data.questions.map((question) => (
          <div key={question._id} className="col-12 col-xl-6">
            <div className="card mb-3">
              <CardHeader>
                {question.title} <br />
                <WhiteText>asked by {question.author}</WhiteText>
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

export default QuestionsList;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { GET_QUESTIONS } from './queries';
// import styled from 'styled-components';

// const Title = styled.h3`
//   color: #007bff;
// `;

// const FlexRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 1rem 0;
// `;

// const Column = styled.div`
//   flex: 50%;

//   @media (min-width: 1200px) {
//     flex: none;
//     width: 50%;
//   }
// `;

// const Card = styled.div`
//   margin-bottom: 1rem;
//   background-color: #343a40;
//   color: #f8f9fa;
//   padding: 0.5rem 1rem;
//   margin: 0;
// `;

// const ButtonLink = styled(Link)`
//   display: block;
//   width: 100%;
//   background-color: #f8f9fa;
//   color: #343a40;
//   text-align: center;
//   padding: 0.5rem 0;
//   margin-top: 0.5rem;
//   text-decoration: none;
// `;

// const QuestionsList = ({ title }) => {
//   const { loading, error, data } = useQuery(GET_QUESTIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return (
//     <div>
//       <Title>{title}</Title>
//       <FlexRow>
//         {data.questions.map((question) => (
//           <Column key={question._id}>
//             <Card>
//               <h4>
//                 {question.title} <br />
//                 <span style={{ fontSize: '1rem' }}>
//                   asked by {question.author}
//                 </span>
//               </h4>

//               <ButtonLink to={`/questions/${question._id}`}>
//                 View and answer this question.
//               </ButtonLink>

//               {question.comments &&
//                 question.comments.map((comment) => (
//                   <p key={comment._id}>{comment.text}</p>
//                 ))}
//             </Card>
//           </Column>
//         ))}
//       </FlexRow>
//     </div>
//   );
// };

// export default QuestionsList;








// import React from 'react';
// import { Link } from 'react-router-dom';

// const QuestionsList = ({ questions, title }) => {
//   if (!questions.length) {
//     return <h3>No Questions Yet</h3>;
//   }

//   return (
//     <div>
//       <h3 className="text-primary">{title}</h3>
//       <div className="flex-row justify-space-between my-4">
//         {questions &&
//           questions.map((question) => (
//             <div key={question._id} className="col-12 col-xl-6">
//               <div className="card mb-3">
//                 <h4 className="card-header bg-dark text-light p-2 m-0">
//                   {question.title} <br />
//                   <span className="text-white" style={{ fontSize: '1rem' }}>
//                     asked by {question.author}
//                   </span>
//                 </h4>

//                 <Link
//                   className="btn btn-block btn-squared btn-light text-dark"
//                   to={`/questions/${question._id}`}
//                 >
//                   View and answer this question.
//                 </Link>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionsList;



















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { GET_QUESTIONS } from '../utils/queries'; // Make sure to use the correct query file
// import styled from 'styled-components';

// // Styled-components
// const CardHeader = styled.h4`
//   background-color: dark;
//   color: light;
//   padding: 2rem;
//   margin: 0;
// `;

// const WhiteText = styled.span`
//   color: white;
//   font-size: 1rem;
// `;

// const Button = styled(Link)`
//   display: block;
//   width: 100%;
//   background-color: light;
//   color: dark;
// `;

// // QuestionsList component
// const QuestionsList = ({ title }) => {
//   // Fetching questions data using the GET_QUESTIONS query
//   const { loading, error, data } = useQuery(GET_QUESTIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   if (!data.questions.length) {
//     return <h3>No Questions Yet</h3>;
//   }

//   return (
//     <div>
//       <h3 className="text-primary">{title}</h3>
//       <div className="flex-row justify-space-between my-4">
//         {data.questions.map((question) => (
//           <div key={question._id} className="col-12 col-xl-6">
//             <div className="card mb-3">
//               <CardHeader>
//                 {question.title} <br />
//                 <WhiteText>asked by {question.author}</WhiteText>
//               </CardHeader>

//               <Button to={`/questions/${question._id}`}>
//                 View and answer this question.
//               </Button>

//               <Button to={`/questions/${question._id}/comments`}>
//                 View Comments
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionsList;
