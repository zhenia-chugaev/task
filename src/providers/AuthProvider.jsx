import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import AuthContext from '#contexts/AuthContext';

const AuthProvider = ({ children, authInstance }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    const { user } = await createUserWithEmailAndPassword(authInstance, email, password);
    setUser(user);
  };

  const logIn = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(authInstance, email, password);
    setUser(user);
  };

  const logOut = async () => {
    await signOut(authInstance);
    setUser(null);
  };

  onAuthStateChanged(authInstance, (user) => {
    if (user) {
      setUser(user);
    } else {
      logOut();
    }
  });

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
