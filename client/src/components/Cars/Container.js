import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { carQueries } from '../../modules/Cars';
import { renderWhileLoading, renderForError, getFromData } from '../../utils/recompose-extensions';

import Component from './Component';
import { Loader, ErrorMessage } from '../General';

const enhancer = compose(
  graphql(carQueries.GET_CARS),
  renderWhileLoading(Loader, 'cars'),
  renderForError(ErrorMessage),
  getFromData('cars'),
);

export default enhancer(Component);
