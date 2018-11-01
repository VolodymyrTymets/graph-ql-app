import gql from 'graphql-tag';

// language=GraphQL
const GET_USER = gql`
  query getUser($_id: String) {
    user(_id: $_id) {
      email
    }
  }
`;

// language=GraphQL
const GET_CURRENT_USER = gql`
  {
    currentUser {
      _id,
      email
    }
  }
`;



export default { GET_USER, GET_CURRENT_USER };

