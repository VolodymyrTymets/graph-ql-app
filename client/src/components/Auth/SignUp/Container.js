import { compose, withHandlers } from 'recompose';
import { userMutations} from '../../../modules/User';
import { renderWhileLoading, withMutation } from '../../../utils/recompose-extensions';

import Component from './Component';
import { Loader } from '../../General';
import { setAuthToken } from "../../../utils/authorization";

const enhancer = compose(
  withMutation(userMutations.SIGN_UP, { name: 'signUp' }),
  renderWhileLoading(Loader, ['loading']),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      const email = e.target.email.value.trim();
      const password = e.target.password.value.trim();
      props.signUp({ variables: { email, password } })
        .then(({ data }) => {
        setAuthToken(data.signUp);
        props.history.push(props.routeList.HOME);
      })
      .catch(err => console.log(err))
    }
  }),
);

export default enhancer(Component);
