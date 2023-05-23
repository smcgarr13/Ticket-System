const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    questions: [Question]
    bounties: [bounty]
  }

  type Auth {
    token: ID!
    profile: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    removeUser: User
  }
`;

module.exports = typeDefs;