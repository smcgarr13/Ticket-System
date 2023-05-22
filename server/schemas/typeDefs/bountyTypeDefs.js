const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Bounty {
    _id: ID
    amount: String
  }`

  module.exports = typeDefs;