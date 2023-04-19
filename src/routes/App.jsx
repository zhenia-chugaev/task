import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const logIn = () => setIsUserLoggedIn(true);
  const logOut = () => setIsUserLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, logIn, logOut }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default App;
