import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDoc,
} from '../../utils/firebase/firebase.utils';

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
    setFormFields({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='displayName'>Display Name</label>
        <input
          required
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <label htmlFor='email'>Email</label>
        <input
          required
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />

        <label htmlFor='password'>Password</label>
        <input
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          required
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
