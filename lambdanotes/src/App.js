import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList.js';
import LeftBox from './components/LeftBox';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import { Route } from 'react-router-dom';

class App extends Component {
  render(props) {
    return (
      <div className="AppContainer">
        <div className="App">
          <LeftBox />
          <Route exact path="/" component={TodoList} />
          <Route path="/create" component={CreateNote} />
          <Route 
          path="/view/:id"
          render={(props) => <ViewNote {...props} />}/>
          <Route path="/edit" component={EditNote} />
        </div>
      </div>
    );
  }
}

export default App;