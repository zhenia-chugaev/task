import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './providers/AuthProvider';
import DatabaseProvider from './providers/DatabaseProvider';
import Router from './routes';
import './index.css';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authInstance={auth}>
      <DatabaseProvider databaseInstance={database}>
        <Router />
      </DatabaseProvider>
    </AuthProvider>
  </React.StrictMode>
);
