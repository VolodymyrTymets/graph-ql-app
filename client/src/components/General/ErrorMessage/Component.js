import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => <div>{message || 'Something went wrong =('}</div>;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
