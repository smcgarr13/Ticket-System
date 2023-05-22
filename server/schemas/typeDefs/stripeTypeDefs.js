const { gql } = require('apollo-server-express');
const typeDefs = gql`

  type Query {
    # Define a query to get a question by ID
    checkout(questionId: ID!): CheckoutResponse!
  }
  type CheckoutResponse {
    session: String!
  }
`
  module.exports = typeDefs;