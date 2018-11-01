import gql from 'graphql-tag';

// language=GraphQL
const GET_TOKEN = gql`
  query {
    authorization @client {
        token
    }
  }
`;

const GET_ACTIVE_USERID = gql`
    query {
        authorization @client {
            userId
        }
    }
`;

export default { GET_TOKEN, GET_ACTIVE_USERID };

