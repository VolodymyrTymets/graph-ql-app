import gql from 'graphql-tag';

const SIGN_IN = gql`
    mutation signIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password)
    }
`;

const SIGN_UP = gql`
    mutation signUp($email: String!, $password: String!) {
        signUp(email: $email, password: $password)
    }
`;

export default { SIGN_IN, SIGN_UP };