// Type Definitions
const { gql } = require('apollo-server-express');
const typeDefs = gql `
  type Comment{
    _id: ID
    questionId: ID
    commentAuthor: String
    commentText: String
    createdAt: String
    isSolution: Boolean
  }
  input CommentInput {
    _id: ID
    questionId: ID
    commentAuthor: String
    commentText: String
    createdAt: String
    isSolution: Boolean
  }
  type Question {
    _id: ID!
    questionAuthor: String!
    questionText: String!
    createdAt: String
    bounty: Int
    solved: Boolean
    comments: [Comment]
    solution: [Comment]
  }

  type Query {
    question(id: ID!): Question
    questions: [Question]
  }

  type Mutation {
    updateQuestion(
      id: ID!
      solved: Boolean
      bounty: Int
      questionText: String
      solution: CommentInput
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


// `
//   type Question {
//     _id: ID!
//     questionAuthor: String!
//     questionText: String!
//     createdAt: String
//     bounty: Int
//     solution: [Comment]
//     comments: [Comment]
//     solved: Boolean
//   }
  
//   input CommentInput {
//     _id: ID
//     questionId: ID
//     commentAuthor: String
//     commentText: String
//     createdAt: String
//     isSolution: Boolean
//   }

//   type Query {
//     question(id: ID!): Question
//     questions: [Question]
//   }

//   type Mutation {
//     updateQuestion(
//       id: ID!
//       solved: Boolean
//       bounty: Int
//       questionText: String
//       solution: CommentInput
//     ): Question

//     addQuestion(
//       questionText: String!
//       questionAuthor: String!
//     ): Question

//     deleteQuestion(
//       id: ID!
//     ): Question
//   }
// `;