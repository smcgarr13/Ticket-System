// Type Definitions
const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Question {
    _id: ID!
    questionAuthor: String!
    questionText: String!
    createdAt: String!
    bounty: Int
    solution: [String]
    comments: [Comment]!
    solved: Boolean
  }

  type Query {
    question(id: ID!): Question
  }

  type Mutation {
    updateQuestion(
      id: ID!
      solved: Boolean
      bounty: Int
      questionText: String
      solution: [String]
    ): Question

    addQuestion(
      questionText: String!
      questionAuthor: String!
    ): Question

    deleteQuestion(
      id: ID!
    ): Question
  }
`;
module.exports = typeDefs;

// Resolvers
const questionResolvers = {
  Query: {
    question: async (parent, { questionId }, context) => {
      return await Question.findById(questionId);
    },
    questions: async (parent, args, context) => {
      return await Question.find({});
    },
  },

  Mutation: {
    addQuestion: async (parent, { questionAuthor, questionText }, context) => {
      let newQuestion = new Question({
        questionAuthor,
        questionText,
        createdAt: new Date().toISOString(),
        solved: false,
      });
    
      return await newQuestion.save();
    },

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

    deleteQuestion: async (parent, { id }, context) => {
      return await Question.findByIdAndDelete(id);
    },
  },
};

module.exports = questionResolvers;



// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   # Define a type for Question
//   type Question {
//     _id: ID
//     questionAuthor: String
//     questionText: String
//     createdAt: String
//     bounty: Int
//     solution: [String]
//     comments: [Comment]!
//     solved: Boolean
//   }

//   # Define a type for Query
//   type Query {
//     # Define a query to get a question by ID
//     question(questionId: ID!): Question
//   }

//   # Define a type for Mutation
//   type Mutation {
//     # Define a mutation to update a question
//     updateQuestion(
//       questionId: ID!
//       solved: Boolean
//       bounty: Int
//       questionText: String
//       solution: [String]
//     ): Question
//     # Define a mutation to add a new question
//     addQuestion(
//       questionText: String!
//       questionAuthor: String!
//     ): Question
//   }
// `;

// module.exports = typeDefs;