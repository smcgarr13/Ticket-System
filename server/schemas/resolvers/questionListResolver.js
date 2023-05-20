// Importing necessary modules
const { QuestionList } = require('../../models');

// Resolver for handling question related queries and mutations
const questionListResolvers = {
  Query: {
          questionList: async (parent, args, context) => {
            try {
              const { filter } = args;
    // Fetch the questionList based on the filter and populate the questions field
              const questionList = await QuestionList.findOne({ filter }).populate({
    // Check the filter in the Question model as well
              path:'questions',
              match: { filter }
              }) 
 
            
    // No questionList is found
              if (!questionList) {
                return null; 
              
              }
              return questionList.questions;
             } catch (error) {
              console.error('Error retrieving question list:', error);
              throw error;
            }
          },
          // Other resolvers...
        // Other resolver maps or functions...
      

    
  },
};

module.exports = questionListResolvers;