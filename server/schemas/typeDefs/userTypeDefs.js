const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Comment{
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
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    comments: [Comment]
    question: [Question]

  }
type Auth {
        token: ID!
        user: User
      }
type Query {
    users: [User]
    user(userId: ID!): User
    me: User
  }
type Mutation {
  createUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth
    removeUser: User
  }
`;

module.exports = typeDefs;