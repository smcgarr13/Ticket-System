import { gql } from '@apollo/client';

// GET_SINGLEQUESTION query
export const GET_SINGLEQUESTION = gql`
  query GetSingleQuestion($questionId: ID!) {
    question(questionId: $questionId) {
      _id
      questionAuthor
      questionText
      createdAt
      bounty
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
// Get all Questionns
export const GET_QUESTIONS = gql`
  query GetQuestions {
    questions {
      _id
      questionAuthor
      questionText
      createdAt
    }
  }
`;