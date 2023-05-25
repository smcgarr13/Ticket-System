import { gql} from '@apollo/client';

const CHECKOUT_QUERY = gql`
  query Checkout($questionId: ID!) {
    checkout(questionId: $questionId) {
      session
    }
  }
`;

export default CHECKOUT_QUERY;

