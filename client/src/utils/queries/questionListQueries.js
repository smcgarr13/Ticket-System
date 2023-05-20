import { gql } from '@apollo/client';

// GET_SINGLEQUESTION query
export const GET_QUESTIONLIST = gql`
  query GetQuestionList($filter: String) {
    question(questionId: $questionId) {
      _id
      filter
      questions {
        _id
        questionAuthor
        questionText
        solved
        solution
      }
    }
  }
`;