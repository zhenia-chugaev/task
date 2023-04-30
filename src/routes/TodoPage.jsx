import { Outlet } from 'react-router-dom';
import { Header, Main, Calendar } from '../components/';

const TodoPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Calendar />
        <Outlet />
      </Main>
    </>
  );
}

export default TodoPage;
