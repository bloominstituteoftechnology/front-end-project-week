import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'react-redux';
import rootReducer from './reducers/';
import reducers from './reducers';


import './index.css';
import PostsIndex from './components/PostsIndex';
import SideBar from './components/SideBar';
import CreateNew from './components/CreateNew';

const store = createStore(rootReducer, applyMiddleware());


ReactDOM.render(
 <Provider store={store}> 
    <BrowserRouter>
      <div>
        <SideBar />
          <Route path="/" component={PostsIndex} />
          <Route path="/CreateNew" component={CreateNew}/>

      </div>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));