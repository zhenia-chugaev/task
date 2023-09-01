import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AuthForm from '../components/AuthForm';

const SignupPage = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, onError) => {
    try {
      await signUp(values.email, values.password);
      navigate('/todo');
    } catch {
      onError();
    }
  };

  const formText = (
    <>...or just <Link to="/login">log in</Link> if you already have an account</>
  );

  return (
    <AuthForm
      actionType="Sign up"
      handleSubmit={handleSubmit}
      formText={formText}
    />
  );
};

export default SignupPage;
