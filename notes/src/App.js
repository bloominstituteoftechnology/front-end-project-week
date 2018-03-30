import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LeftBar from './Components/LeftBar';
import List from './Components/List';
import Delete from './Components/Delete';
import Create from './Components/Create';
import View from './Components/View';
import Edit from './Components/Edit';

class App extends Component {
  state = {
    notes: [
      {
        title: 'Note Title 1',
        text: 'Body',
        id: 0
      },
      {
        title: 'Note Title 2',
        text: 'Body',
        id: 1
      },
      {
        title: 'Note Title 3',
        text: 'Body',
        id: 2
      },
      {
        title: 'Note Title 4',
        text: 'Body',
        id: 3
      },
      {
        title: 'Note Title 5',
        text: 'Body',
        id: 4
      },
      {
        title: 'Note Title 6',
        text: 'Body',
        id: 5
      }
    ]
  };

  handleDelete = num => {
    localStorage.removeItem(`id${num}`);
    const memory = Array.from(Object.values(localStorage));
    if (memory.length >= 0) {
      const memoryNotes = [];
      for (let i = 0; i < memory.length; i++) {
        memoryNotes.push(JSON.parse(memory[i]));
      }
      this.setState({ notes: memoryNotes });
    }
  };

  render() {
    return (
      <div className="App">
        <Route path="/" component={LeftBar} />
        <Route
          exact
          path="/"
          render={props => <List {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/Create"
          render={props => <Create {...props} add={this.handleAdd} />}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => <Delete {...props} delete={this.handleDelete} />}
        />
        <Route
          exact
          path="/notes/:id/Edit"
          render={props => <Edit {...props} edit={this.handleEdit} />}
        />
      </div>
    );
  }
}

export default App;
