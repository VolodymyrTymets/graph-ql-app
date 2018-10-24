import { graphql } from 'react-apollo';
import { compose, withProps } from 'recompose';
import { renderWhileLoading, renderForError, getFromData } from '../../../utils/recompose-extensions';

import Component from './Component';
import { Loader, ErrorMessage } from '../../General';

const enhancer = compose(
  // graphql(carQueries.GET_CARS),
  // renderWhileLoading(Loader, 'cars'),
  //renderForError(ErrorMessage),
  //getFromData('cars'),
  withProps(console.log)
);

export default enhancer(Component);
