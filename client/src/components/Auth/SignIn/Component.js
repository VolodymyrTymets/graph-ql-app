import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';

const SignIn = ({ onSubmit, error }) =>
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" defaultValue="volodymyrtymets@gmail.com"/>
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" defaultValue="123456"/>
    </FormGroup>
    {
      error &&
      <FormText color="muted">
        {error.message}
      </FormText>
    }
    <Button>Submit</Button>
  </Form>

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default SignIn;
