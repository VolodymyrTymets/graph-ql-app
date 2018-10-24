import { compose, withHandlers } from 'recompose';
import { userMutations} from '../../../modules/User';
import { renderWhileLoading, withMutation } from '../../../utils/recompose-extensions';

import Component from './Component';
import { Loader } from '../../General';

const enhancer = compose(
  withMutation(userMutations.SIGN_UP, { name: 'signUp' }),
  renderWhileLoading(Loader, ['loading']),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      const email = e.target.email.value.trim();
      const password = e.target.password.value.trim();
      console.log(email, password);
      props.signUp({ variables: { email, password } }).then(console.log)
    }
  }),
);

export default enhancer(Component);
