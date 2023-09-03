import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from '#hooks/useAuth';

const PrivateContent = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }}/>;
};

export default PrivateContent;
