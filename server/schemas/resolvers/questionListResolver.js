const { QuestionList, Question } = require('../../models');

const questionListResolvers = {
  Query: {
    questionList: async (parent, args, context) => {
      try {
        const { filter } = args;
        const questionList = await QuestionList.findOne({ filter }).populate('questions');

        if (!questionList) {
          return null; 
        }
        return questionList.questions;
      } catch (error) {
        console.error('Error retrieving question list:', error);
        throw error;
      }
    },
  },
  Mutation: {
    updateQuestionList: async (parent, { listId, questionId }, context) => {
      const question = await Question.findById(questionId);

      if (!question) {
        throw new Error("Question not found");
      }

      return await QuestionList.findByIdAndUpdate(
        listId,
        { $addToSet: { questions: questionId } },
        { new: true, useFindAndModify: false }
      ).populate('questions');
    },
  },
};

module.exports = questionListResolvers;


// // Importing necessary modules
// const { QuestionList, Question } = require('../../models');

// // Resolver for handling question related queries and mutations
// const questionListResolvers = {
//   Query: {
//     questionList: async (parent, args, context) => {
//       try {
//         const { filter } = args;
//         // Fetch the questionList based on the filter and populate the questions field
//         const questionList = await QuestionList.findOne({ filter }).populate('questions');

//         // No questionList is found
//         if (!questionList) {
//           return null; 
//         }
//         return questionList.questions;
//       } catch (error) {
//         console.error('Error retrieving question list:', error);
//         throw error;
//       }
//     },
 
//   },
//   Mutation: {
//     updateQuestionList: async (parent, { listId, questionId }, context) => {
//       const question = await Question.findById(questionId);

//       if (!question) {
//         throw new Error("Question not found");
//       }

//       return await QuestionList.findByIdAndUpdate(
//         listId,
//         { $addToSet: { questions: questionId } },
//         { new: true, useFindAndModify: false }
//       ).populate('questions');
//     },
//   },
// };

// module.exports = questionListResolvers;









// // Importing necessary modules
// const { QuestionList } = require('../../models');

// // Resolver for handling question related queries and mutations
// const questionListResolvers = {
//   Query: {
//           questionList: async (parent, args, context) => {
//             try {
//               const { filter } = args;
//     // Fetch the questionList based on the filter and populate the questions field
//     const questionList = await QuestionList.findOne({ filter }).populate('questions');


//     //           const questionList = await QuestionList.findOne({ filter }).populate({
//     // // Check the filter in the Question model as well
//     //           path:'questions',
//     //           match: { filter }
//     //           }) 
 
            
//     // No questionList is found
//               if (!questionList) {
//                 return null; 
              
//               }
//               return questionList.questions;
//              } catch (error) {
//               console.error('Error retrieving question list:', error);
//               throw error;
//             }
//           },
//           // Other resolvers...
//         // Other resolver maps or functions...
      

    
//   },
// };

// module.exports = questionListResolvers;