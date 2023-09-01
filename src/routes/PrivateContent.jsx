import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateContent = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateContent;
