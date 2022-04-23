import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  //use this func to use the Google signin
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
    </div>
  );
};

export default SignIn;
