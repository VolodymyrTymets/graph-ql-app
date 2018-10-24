import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SignUp = ({ onSubmit, error }) =>
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
    </FormGroup>
    {
      error &&
      <FormText color="muted">
        {error.message}
      </FormText>
    }
    <Button>Submit</Button>
  </Form>;

SignUp.propTypes = {
 onSubmit: PropTypes.func.isRequired,
 error: PropTypes.object,
};

export default SignUp;
