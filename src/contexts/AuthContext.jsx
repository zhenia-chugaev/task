import { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  signUp: () => {},
  logIn: () => {},
  logOut: () => {},
});

export default AuthContext;
