const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define a type for Question
  type QuestionList {
    _id: ID
    questions: [Question]
    filter: String
  }

  # Define a type for Query
  type Query {
    # Define a query to get a filtered Questions
    questionList(filter:String): QuestionList
  }
`;

module.exports = typeDefs;