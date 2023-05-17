// Importing necessary modules
const { Question } = require('../models');

// Resolver for handling question related queries and mutations
const questionResolvers = {
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
    addQuestion: async (parent, { userId, questionText, bounty }, context) => {
      let newQuestion = new Question({
        userId,
        questionText,
        bounty,
        createdAt: new Date().toISOString(),
        solved: false,
      });

      return await newQuestion.save();
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
      }

      return await Question.findByIdAndUpdate(id, update, { new: true });
    },
    // Resolver for deleting a question
    deleteQuestion: async (parent, { id }, context) => {
      return await Question.findByIdAndDelete(id);
    },
  },
};

module.exports = questionResolvers;