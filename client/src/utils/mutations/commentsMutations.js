import { gql } from '@apollo/client';

// ADD_COMMENT mutation
export const ADD_COMMENT = gql`
  mutation AddComment($questionId: ID!, $commentAuthor: String!, $commentText: String!) {
    addComment(questionId: $questionId, commentAuthor: $commentAuthor, commentText: $commentText) {
      _id
      questionId
      commentAuthor
      commentText
      createdAt
      isSolution
    }
  }
`;

// REMOVE_COMMENT mutation
export const REMOVE_COMMENT = gql`
  mutation DeleteComment($_id: ID!) {
    deleteComment(_id: $_id) {
      _id
    }
  }
`;

// UPDATE_COMMENT mutation
export const UPDATE_COMMENT = gql`
  mutation UpdateComment($id: ID!, $commentAuthor: String, $commentText: String, $isSolution: Boolean) {
    updateComment(id: $id, commentAuthor: $commentAuthor, commentText: $commentText, isSolution: $isSolution) {
      _id
      questionId
      commentAuthor
      commentText
      createdAt
      isSolution
    }
  }
`;