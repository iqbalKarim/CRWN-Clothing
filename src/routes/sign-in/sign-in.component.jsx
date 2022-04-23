import SignupForm from '../../components/sign-up-form/sign-up-form.component';
import {
  createUserDoc,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  //use this func to use the Google signin
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDoc(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
