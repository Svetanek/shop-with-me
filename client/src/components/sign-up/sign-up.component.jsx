import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signUpStart } from '../../redux/user/user.actions';
// import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
// import { tsMethodSignature } from '@babel/types';

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userData;
  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserProfileDoc(user, { displayName });
    // this.setState({
    //   displayName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    // });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
