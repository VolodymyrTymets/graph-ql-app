import gql from 'graphql-tag';

// language=GraphQL
const GET_CARS = gql`
  {
    cars {
      _id,
      title,
      description
    }
  }
`;


export default { GET_CARS };

