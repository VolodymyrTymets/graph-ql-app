import { pathOr } from 'ramda';
import React from 'react';
import { Mutation } from "react-apollo";
import { branch, renderComponent, withProps } from 'recompose';

const withMutation = (mutation, opts) =>
  BaseComponent =>
    (children, ...restProps) => (
      <Mutation mutation={mutation}>
        {(mutation, mutationData) => (
          <BaseComponent {...{[opts.name || 'mutation']: mutation }} {...restProps} {...mutationData} {...children}>
            {children}
          </BaseComponent>
        )}
      </Mutation>
    );

const renderWhileLoading = (component, fields = ['data', 'loading']) =>
  branch(
    props => pathOr(false, fields, props),
    renderComponent(component),
  );

const renderForError = (Component, message, fields = ['data', 'error']) =>
  branch(
    props => pathOr(false, fields, props),
    renderComponent(props =>
      (<Component
        message={message}
        logMessage={pathOr('', ['data', 'error', 'message'], props)}
      />)),
  );
const getFromData = (from, as) =>
  withProps(({ data }) => ({ [as || from]: pathOr([], [from], data) }));

export { renderWhileLoading, renderForError, getFromData, withMutation };
