import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'react-redux';
import rootReducer from './reducers/';
import reducers from './reducers';


import './index.css';
import SideBar from './components/SideBar';
import PostsIndex from './components/PostsIndex';
import CreateNew from './components/CreateNew';

const store = createStore(rootReducer, applyMiddleware());


ReactDOM.render(
 <Provider store={store}> 
    <BrowserRouter>
      <div>
        <SideBar />
          <Route path="/" component={PostsIndex} exact />
          <Route path="/notes/new" component={CreateNew}/>

      </div>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));