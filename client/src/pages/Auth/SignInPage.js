import React from 'react';
import { SignIn } from '../../components/Auth';

const SignInPage = (props) =>
  <div className="container">
    <SignIn {...props} />
  </div>;

export default SignInPage;
