import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/App.css';
import { notes } from '../notes';
import { TodoList } from './TodoList';
import { TodoView } from './TodoView';


class App extends Component {
  state = {
    notes: notes
  }

  render() {
    return (
      <div className="App">
        <div className="App_sideBar">
          <h3>Lambda<br/>Notes</h3>
          <button onClick={() => {}}>View Your Notes</button>
          <button onClick={() => {}}>+Create New Note</button>
        </div>
        <div className="App_body">
          <Route exact path="/" component={() =>
            <TodoList notes={this.state.notes}/> 
          }/>
          {/* <Route path="/view/:id" component={props => <TodoView /> }/>
          <Route path="/create" component={props => <CreateTodo /> }/>
          <Route path="/edit/:id" component={props => <EditTodo /> }/> */}
        </div>
      </div>
    );
  }
}

export default App;
