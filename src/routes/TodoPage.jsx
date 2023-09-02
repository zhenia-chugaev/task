import { Outlet } from 'react-router-dom';
import { Header, Main } from '../components/Layout';
import Calendar from '../components/Calendar';

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
