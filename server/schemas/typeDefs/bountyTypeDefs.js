const { gql } = require('apollo-server-express');

const typeDefs = gql`
type bounty {
    _id: ID
    amount: String
  }`

  module.exports = typeDefs;