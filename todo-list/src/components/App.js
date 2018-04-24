import React, { Component } from 'react';

import '../styles/App.css';
import { TodoList } from './TodoList';
import { notes } from '../notes';

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
          <TodoList notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
