import React from 'react';
import App from './App';
import './style.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
const rootElement = document.getElementById('root');
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieFetch } from './utils/MovieFetch';
import { store } from './store/store';
import { Provider } from 'react-redux';


createRoot(rootElement).render(
  // <React.StrictMode>
  <MovieFetch>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer />
    </Router>
  </MovieFetch>
  // </React.StrictMode>
);