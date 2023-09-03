import { Outlet } from 'react-router-dom';
import { Header, Main, Column, Calendar } from '#components';

const TodoPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Column>
          <Calendar />
          <Outlet />
        </Column>
      </Main>
    </>
  );
}

export default TodoPage;
