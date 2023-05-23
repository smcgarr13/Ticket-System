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