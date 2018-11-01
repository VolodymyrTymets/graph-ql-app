import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';

const SignIn = ({ currentUser }) =>
  <div>Email{currentUser && currentUser.email}</div>

SignIn.propTypes = {
  user: PropTypes.object.isRequired,
};

export default SignIn;
