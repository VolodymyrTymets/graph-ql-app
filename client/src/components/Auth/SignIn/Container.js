import { graphql } from 'react-apollo';
import { compose, withHandlers } from 'recompose';
import { userMutations, userQueries } from '../../../modules/User';
import { authMutations, authQueries } from '../../../modules/Auth';
import { renderWhileLoading, withMutation } from '../../../utils/recompose-extensions';
import { setAuthToken } from '../../../utils/authorization'

import Component from './Component';

const enhancer = compose(
  withMutation(userMutations.SIGN_IN, { name: 'signIn' }),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      const email = e.target.email.value.trim();
      const password = e.target.password.value.trim();
      console.log(email, password);
      props.signIn({
        variables: { email, password },
        refetchQueries: userQueries.GET_CURRENT_USER,
      })
        .then(({ data }) => setAuthToken(data.signIn))
        .catch(err => console.log(err))
    }
  }),
);

export default enhancer(Component);
