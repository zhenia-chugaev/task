import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Header, Main } from '../components/Layout';
import AuthForm from '../components/AuthForm';

const SignupPage = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values, onError) => {
    try {
      await signUp(values.email, values.password);
      navigate('/');
    } catch {
      onError();
    }
  };

  const formText = (
    <>...or just <Link to="/login">log in</Link> if you already have an account</>
  );

  return (
    <>
      <Header />
      <Main>
        <AuthForm
          actionType="Sign up"
          handleSubmit={handleSubmit}
          formText={formText}
        />
      </Main>
    </>
  );
};

export default SignupPage;
