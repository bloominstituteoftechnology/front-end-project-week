import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/App.css';
import { notes } from '../notes';
import { TodoList } from './TodoList';
import { TodoView } from './TodoView';


class App extends Component {
  state = { notes: notes };
  render() {
    return (
      <div className="App">
        <div className="App_sideBar">
          <h3>Lambda<br/>Notes</h3>
          <Link to="/" className="App_link">View Your Notes</Link>
          <Link to="/create" className="App_link">+Create New Note</Link>
        </div>
        <div className="App_body">
          <Route exact path="/" render={() =>
            <TodoList notes={this.state.notes}/> 
          }/>
          <Route path="/view/:id" render={props => 
            <TodoView {...props} notes={this.state.notes}/> 
          }/>
          {/* <Route path="/create" component={props => <CreateTodo /> }/>
          <Route path="/edit/:id" component={props => <EditTodo /> }/> */}
        </div>
      </div>
    );
  }
}

export default App;
