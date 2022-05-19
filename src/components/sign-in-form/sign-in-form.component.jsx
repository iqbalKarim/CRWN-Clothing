import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //use this func to use the Google signin
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFields();
    } catch (error) {
      console.log(error);

      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          value={email}
          type='email'
          name='email'
          onChange={handleChange}
        />
        <FormInput
          label='Password'
          required
          value={password}
          type='password'
          name='password'
          onChange={handleChange}
        />
        <ButtonsContainer className='buttons-container'>
          <Button type='submit'>SIGN IN</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SigninForm;
