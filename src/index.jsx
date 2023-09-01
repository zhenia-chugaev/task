import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import './index.css';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import App from './routes/App';
import MainPage from './routes/MainPage';
import SignupPage from './routes/SignupPage';
import LoginPage from './routes/LoginPage';
import PrivateContent from './routes/PrivateContent';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authInstance={auth}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
