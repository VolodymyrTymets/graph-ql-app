import { compose } from 'recompose';
import withCurrentUser from '../../components/Auth/CurrentUser'

import Component from './Component';
//
const enhancer = compose(
  withCurrentUser,
);

export default withCurrentUser(Component)
