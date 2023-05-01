import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Header, Main } from '../components/Layout';
import useAuth from '../hooks/useAuth';
import { routes } from './';

const MainPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Main>
        <h1 className="heading text-center text-dark">
          The ultimate solution for managing your tasks
        </h1>
        {user && <div className="text-center">
          <Button as={Link} to={routes.todo()} variant="secondary">
            Start Planning
          </Button>
        </div>}
      </Main>
    </>
  );
};

export default MainPage;
