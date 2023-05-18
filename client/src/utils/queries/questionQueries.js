import { gql } from '@apollo/client';

// GET_SINGLEQUESTION query
export const GET_SINGLEQUESTION = gql`
  query GetSingleQuestion($questionId: ID!) {
    question(questionId: $questionId) {
      _id
      questionAuthor
      questionText
      createdAt
      Bounty
      solution
      comments {
        _id
        commentAuthor
        commentText
        createdAt
        isSolution
      }
      solved
    }
  }
`;