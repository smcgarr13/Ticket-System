import { gql } from '@apollo/client';

// GET_COMMENTS query
export const GET_COMMENTS = gql`
  query GetComments($questionId: ID!) {
    comments(questionId: $questionId) {
      _id
      commentAuthor
      commentText
      createdAt
      isSolution
    }
  }
`;

// GET_SOLUTION query
export const GET_SOLUTION = gql`
  query GetSolution($questionId: ID!) {
    comments(questionId: $questionId, isSolution: true) {
      _id
      commentAuthor
      commentText
      createdAt
      isSolution
    }
  }
`;