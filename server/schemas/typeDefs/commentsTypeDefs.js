const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Comment type definition
  type Comment {
    _id: ID
    questionId: ID!
    commentAuthor: String
    commentText: String
    createdAt: String
    isSolution: Boolean
  }

  # Query type definition
  type Query {
    comment(commentId: ID!): Comment
    comments(questionId: ID!): [Comment]
  }

  # Mutation type definition
  type Mutation {
    updateComment(
      commentId: ID!
      isSolution: Boolean
      commentText: String
    ): Comment
    addComment(
      questionId: ID!
      commentText: String!
      commentAuthor: String!
    ): Comment
    removeComment(
      questionId: ID!
      commentId: ID!
    ): Comment
  }
`;

module.exports = typeDefs;
