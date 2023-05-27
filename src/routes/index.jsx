import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import MainPage from './MainPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import PrivateContent from './PrivateContent';
import TodoPage from './TodoPage';
import TodoList from './TodoList';
import TaskPage from './TaskPage';
import AddForm from './AddForm';
import EditForm from './EditForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'todo',
        element: <PrivateContent />,
        children: [
          {
            path: '',
            element: <TodoPage />,
            children: [
              {
                path: ':listNum',
                element: <TodoList />,
              },
            ],
          },
          {
            path: ':listNum/add',
            element: <AddForm />,
          },
          {
            path: ':listNum/task/:taskId',
            element: <TaskPage />,
          },
          {
            path: ':listNum/task/:taskId/edit',
            element: <EditForm />,
          },
        ],
      },
    ],
  },
]);

const routes = {
  signup: () => '/signup',
  login: () => '/login',
  todo: (listNum) => ['/todo', listNum].join('/'),
  addForm: (listNum) => ['/todo', listNum, 'add'].join('/'),
  task: (listNum, taskId) => ['/todo', listNum, 'task', taskId].join('/'),
  editForm: (listNum, taskId) => ['/todo', listNum, 'task', taskId, 'edit'].join('/'),
};

const Router = () => <RouterProvider router={router} />;

export { Router as default, routes };
