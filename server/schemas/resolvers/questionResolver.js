// Importing necessary modules
const { Question } = require('../../models');

// Resolver for handling question related queries and mutations
const questionResolver = {
  Query: {
    // Resolver for finding a question by ID
    question: async (parent, { id }, context) => {
      return await Question.findById(id);
    },
    // Resolver for finding all questions
    questions: async (parent, args, context) => {
      return await Question.find({});
    },
  },
  Mutation: {
    // Resolver for adding a new question
    addQuestion: async (parent, { questionAuthor, questionText}, context) => {
      const newQuestion = await Question.create({
        questionAuthor,
        questionText,

      })
      console.log(newQuestion);
      return newQuestion
      
    },
    // Resolver for updating a question

    updateQuestion: async (parent, { id, questionText, bounty, solved }, context) => {
      let update = {};
      if (questionText !== undefined) {
        update.questionText = questionText;
      }
      if (bounty !== undefined) {
        update.bounty = bounty;
      }
      if (solved !== undefined) {
        update.solved = solved;
        if(solved){
          const question = await Question.findById(id);
          const solutionComment = await Comment.findOne({question:id,isSolution:true});
          if(solutionComment){
            update.solution = solutionComment;
            
          }else{
            update.solution = null;
          }
        }
      }

      return await Question.findByIdAndUpdate(id, update, { new: true });
    },
    // Resolver for deleting a question
    deleteQuestion: async (parent, { id }, context) => {
      return await Question.findByIdAndDelete(id);
    },
  },
};

module.exports = questionResolver