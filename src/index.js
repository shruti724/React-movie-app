// Package imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";

// File imports
import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies);
console.log('store',store);
// getState function of store
console.log('STATE', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


