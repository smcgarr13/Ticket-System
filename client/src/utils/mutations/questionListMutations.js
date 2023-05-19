// Importing the gql tagged template function
const { gql } = require('@apollo/client');

// Creating the UPDATE_QUESTIONLIST mutation
const UPDATE_QUESTIONLIST = gql`
  mutation UpdateQuestionList($questionId: ID!, $solved: Boolean!, $bounty: Int!, $questionText: String!) {
    updateQuestion(questionId: $questionId, solved: $solved, bounty: $bounty, questionText: $questionText) {
      _id
      questionAuthor
      questionText
      createdAt
      bounty
      solution
      comments {
        _id
      }
      solved
    }
  }
`;

// Exporting the mutation
module.exports = {
  UPDATE_QUESTIONLIST,
};