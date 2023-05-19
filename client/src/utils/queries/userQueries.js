import {gql} from '@apollo/client';

export const QUERY_USERS = gql`
query allUsers{
    user{
        _id
        username
        email
        password
        questions
        comments
    }
}

`

export const QUERY_SINGLE_USERS = gql`
query singleUser($userId: ID!) {
    profile(userId: $userId) {
        _id
        username
        email
        password
        questions
        comments
    }
  }
`

export const QUERY_ME = gql`
query me{
    me{
        _id
        username
        email
        password
        questions
        comments
    }
}

`