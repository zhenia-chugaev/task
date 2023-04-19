import { createContext } from 'react';

const AuthContext = createContext({
  isUserLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});

export default AuthContext;
