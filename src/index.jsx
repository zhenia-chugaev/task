import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './components/AuthProvider';
import Router from './routes';
import './index.css';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authInstance={auth}>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
