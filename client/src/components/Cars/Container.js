import { graphql } from 'react-apollo';
import { compose, withProps } from 'recompose';
import { carQueries } from '../../modules/Cars';
import { renderWhileLoading, renderForError, getFromData } from '../../utils/recompose-extensions';

import Component from './Component';
import { Loader, ErrorMessage } from '../General';

import gql from 'graphql-tag';

// language=GraphQL
const GET_NS = gql`{
  apolloClientDemo @client {
      currentPageName
  }
}`;

const enhancer = compose(
  graphql(GET_NS),
  withProps(console.log),
  graphql(carQueries.GET_CARS),
  renderWhileLoading(Loader, 'cars'),
  renderForError(ErrorMessage),
  getFromData('cars'),
);

export default enhancer(Component);
