import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateContent = () => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateContent;
