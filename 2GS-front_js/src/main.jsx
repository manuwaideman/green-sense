import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider, Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';

const isAuthenticated = /* Lógica para verificar se o usuário está autenticado */ true;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to="/login" replace /> },
      { path: 'login', element: <Login /> },
      { path: 'home', element: isAuthenticated ? <Home /> : 
      <Navigate to="/login" replace /> }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
