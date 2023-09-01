import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, onError) => {
    try {
      await logIn(values.email, values.password);
      navigate('/todo');
    } catch {
      onError();
    }
  };

  const formText = (
    <>
      <Link to="/signup">Sign up</Link> if you haven't account yet
    </>
  );

  return (
    <AuthForm
      actionType="Log in"
      handleSubmit={handleSubmit}
      formText={formText}
    />
  );
};

export default LoginPage;
