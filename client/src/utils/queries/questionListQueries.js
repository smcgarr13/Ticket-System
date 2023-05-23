import { gql } from '@apollo/client';

// GET_QUESTIONLIST query
export const GET_QUESTIONLIST = gql`
  query GetQuestionList($filter: String) {
    questionList(filter: $filter) {
      _id
      questions {
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
      filter
    }
  }
`;