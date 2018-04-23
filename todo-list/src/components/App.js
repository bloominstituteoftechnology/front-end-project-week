import React, { Component } from 'react';

import '../styles/App.css';
import { TodoList } from './TodoList';

class App extends Component {
  state = {
    notes: [
      {id: 0, title: 'Note 1', body: 'Lorem ipsum'},
      {id: 1, title: 'Note 2', body: 'Lorem ipsum'},
      {id: 2, title: 'Note 3', body: 'Lorem ipsum'},
    ]
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
