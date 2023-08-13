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
// BEFORE STATE is the state before we send the action
console.log('BEFORE STATE', store.getState());

// dispatch() function of store
store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{name: 'Superman'}]
}); 

// AFTER STATE is after we send the action
console.log('AFTER STATE', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


