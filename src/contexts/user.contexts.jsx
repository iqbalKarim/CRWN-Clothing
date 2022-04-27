import { createContext, useEffect, useState } from 'react';
import {
  createUserDoc,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

//The actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//The provider you will use to get the data
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      if (user) {
        createUserDoc(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
