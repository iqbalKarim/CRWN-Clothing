import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDoc,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer } from './sign-up-form.styles.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDoc(user, { displayName });
      resetFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use. Cannot create user');
      } else {
        console.log('Could not sign up: ', err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          required
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          required
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          required
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignupForm;
