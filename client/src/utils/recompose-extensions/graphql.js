import { pathOr } from 'ramda';
import React from 'react';
import { branch, renderComponent, withProps } from 'recompose';

const renderWhileLoading = (component, propName = 'data') =>
  branch(
    props => pathOr(false, [propName, 'loading'], props),
    renderComponent(component),
  );

const renderForError = (Component, message, propName = 'data') =>
  branch(
    props => props[propName] && props[propName].error,
    renderComponent(props =>
      (<Component
        message={message}
        logMessage={pathOr('', [propName, 'error', 'message'], props)}
      />)),
  );
const getFromData = (from, as) =>
  withProps(({ data }) => ({ [as || from]: pathOr([], [from], data) }));

export { renderWhileLoading, renderForError, getFromData };
