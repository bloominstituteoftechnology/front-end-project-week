import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducers from './allReducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {autoRehydrate} from 'redux-persist';

  const  saveToLocalStorage = (state)=>{
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  }
  catch(e){

    console.log(e)
  };
 }
  const loadFromLocalStorage = ()=>{
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState === null ){
      return undefined;
    }
    else{
      return JSON.parse(serializedState)
    }
  }
catch(e){
console.log(e)
return undefined
}

 }

const persistedSate = loadFromLocalStorage()




const store = createStore(reducers,
  persistedSate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk,logger))

 store.subscribe(()=>{
 saveToLocalStorage(store.getState())
 })


ReactDOM.render(
 <Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
