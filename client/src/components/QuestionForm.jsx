import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUESTION } from '../utils/mutations';

const QuestionForm = () => {
  const [formState, setFormState] = useState({ questionAuthor: '', questionText: '', bounty: 0 });
  const [addQuestion, { error }] = useMutation(ADD_QUESTION);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await addQuestion({
        variables: { ...formState }
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
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
              value={formState.questionAuthor}
              onChange={handleChange}
              required
            />
            <input
              className="form-control"
              type="text"
              name="questionText"
              placeholder="Question"
              value={formState.questionText}
              onChange={handleChange}
              required
            />
            {/* <input
              className="form-control"
              type="number"
              name="bounty"
              placeholder="Bounty"
              value={formState.bounty}
              onChange={handleChange}
              required
            /> */}
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
  







// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_QUESTION } from '../utils/mutations';
// // import styled from 'styled-components';

// // // Define your styled components
// // const Container = styled.div`
// //   /* Add styles that correspond to "container-login" */
// // `;

// // const InputContainer = styled.div`
// //   /* Add styles that correspond to "input-container" */
// // `;

// // const FormControl = styled.input`
// //   /* Add styles that correspond to "form-control" */
// // `;

// // const SubmitButton = styled.button`
// //   /* Add styles that correspond to "submit" */
// // `;

// const QuestionForm = () => {
//   const [formState, setFormState] = useState({ questionAuthor: '', questionText: '', bounty: 0 });
//   const [addQuestion, { error }] = useMutation(ADD_QUESTION);

//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     try {
//       const { data } = await addQuestion({
//         variables: { ...formState }
//       });

//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <div className="container">
//       <h4>Submit a New Question</h4>
//       <form onSubmit={handleFormSubmit}>
//         <div className="input-container">
//           <input
//             type="text"
//             name="questionAuthor"
//             placeholder="Name"
//             value={formState.questionAuthor}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="questionText"
//             placeholder="Question"
//             value={formState.questionText}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="bounty"
//             placeholder="Bounty"
//             value={formState.bounty}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button className="submit" type="submit">
//           Submit
//         </button>
//       </form>
//       {error && <div>There was an error adding your question, please try again.</div>}
//       </div>
//   );
// };

// export default QuestionForm;







// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_QUESTION } from '../utils/mutations'; 

// const QuestionForm = () => {
//   const [formState, setFormState] = useState({ questionAuthor: '', questionText: '', bounty: 0 });
//   const [addQuestion, { error }] = useMutation(ADD_QUESTION);

//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     try {
//       const { data } = await addQuestion({
//         variables: { ...formState }
//       });

//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <div className="container-login">
//       <h4>Submit a New Question</h4>
//       <form onSubmit={handleFormSubmit}>
//         <div className="input-container">
//           <input
//             className="form-control"
//             type="text"
//             name="questionAuthor"
//             placeholder="Your name"
//             value={formState.questionAuthor}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className="form-control"
//             type="text"
//             name="questionText"
//             placeholder="Your question"
//             value={formState.questionText}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className="form-control"
//             type="number"
//             name="bounty"
//             placeholder="Bounty"
//             value={formState.bounty}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button className="submit" type="submit">
//           Submit
//         </button>
//       </form>
//       {error && <div>There was an error adding your question, please try again.</div>}
//     </div>
//   );
// };

// export default QuestionForm;




// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_QUESTION } from '../utils/mutations'; 

// const QuestionForm = () => {
//   const [formState, setFormState] = useState({ questionAuthor: '', questionText: '', bounty: 0 });
//   const [addQuestion, { error }] = useMutation(ADD_QUESTION);

//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     try {
//       const { data } = await addQuestion({
//         variables: { ...formState }
//       });

//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <div>
//       <h4>Submit a New Question</h4>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           name="questionAuthor"
//           placeholder="Your name"
//           value={formState.questionAuthor}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="questionText"
//           placeholder="Your question"
//           value={formState.questionText}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="bounty"
//           placeholder="Bounty"
//           value={formState.bounty}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">
//           Submit
//         </button>
//       </form>
//       {error && <div>There was an error adding your question, please try again.</div>}
//     </div>
//   );
// };

// export default QuestionForm;