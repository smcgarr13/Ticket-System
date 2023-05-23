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
  
  # Define a type for Mutation
  type Mutation {
    updateQuestionList(listId: ID!, questionId: ID!): QuestionList
  }
`;

module.exports = typeDefs;





// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   # Define a type for Question
//   type QuestionList {
//     _id: ID
//     questions: [Question]
//     filter: String
//   }

//   # Define a type for Query
//   type Query {
//     # Define a query to get a filtered Questions
//     questionList(filter:String): QuestionList
//   }
// `;

// module.exports = typeDefs;