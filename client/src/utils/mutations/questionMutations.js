import { gql } from '@apollo/client';

// ADD_QUESTION mutation
export const ADD_QUESTION = gql`
  mutation AddQuestion($userId: ID!, $question: String!, $bounty: Int) {
    addQuestion(userId: $userId, question: $question, bounty: $bounty) {
      _id
      user
      question
      bounty
      solved
    }
  }
`;

// UPDATE_QUESTION mutation
export const UPDATE_QUESTION = gql`
  mutation UpdateQuestion($id: ID!, $question: String, $bounty: Int, $solved: Boolean) {
    updateQuestion(id: $id, question: $question, bounty: $bounty, solved: $solved) {
      _id
      user
      question
      bounty
      solved
    }
  }
`;

// REMOVE_QUESTION mutation
export const REMOVE_QUESTION = gql`
  mutation RemoveQuestion($id: ID!) {
    removeQuestion(id: $id) {
      _id
    }
  }
`;