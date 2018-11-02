import { graphql } from 'react-apollo';
import { compose, withHandlers } from 'recompose';
import { userQueries } from '../../../modules/User';
import { getFromData } from '../../../utils/recompose-extensions';
import { setAuthToken } from '../../../utils/authorization'

const enhancer = compose(
  graphql(userQueries.GET_CURRENT_USER),
  withHandlers({
    onSignOut: props => e => {
      e.preventDefault();
      setAuthToken('');
      props.apolloClient.resetStore();
      props.history.push(props.routeList.SIGN_IN);
    }
  }),
  getFromData('currentUser')
);

export default enhancer //enhancer(Component);
