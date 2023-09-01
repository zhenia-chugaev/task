import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import MainPage from './MainPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import PrivateContent from './PrivateContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
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
        children: [],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
