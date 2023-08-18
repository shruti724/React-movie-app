// Package imports
import React from 'react';
// import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
// import thunk from 'redux-thunk';//to chk

// File imports
import './index.css';
import App from './components/App';
// import movies from './reducers';
import rootReducer  from './reducers';


// Curried Function concept
// function logger(obj, next, action)
// logger(obj)(next)(action) 
// const logger = function({dispatch, getstate}){
//   return function (next){
//     return function (action){
//       // middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

// Modifying middleware (Cleaner code for middleware)
const logger = ({dispatch, getstate})=>(next)=>(action)=>{
  // logger code
  if (typeof action !== 'function'){
    console.log("ACTION_TYPE = ", action.type);
  }
  
  next(action);
}

// This middleware codes is not needed as we have redux-thunk package is doing the same.

// const thunk =
//   ({ dispatch, getstate }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === 'function') {
//       action(dispatch)
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store',store);
// getState function of store
// BEFORE STATE is the state before we send the action
// console.log('BEFORE STATE', store.getState());

// // dispatch() function of store
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// }); 

// // AFTER STATE is after we send the action
// console.log('AFTER STATE', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Passing store as a prop to the App.js */}
    <App store = {store}/>
  </React.StrictMode>
);


