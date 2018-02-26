import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import CreateNote from './CreateNote';

class App extends React.Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Note 1',
        body: 'Words and stuff.',
      },
      {
        id: 1,
        title: 'Note 2',
        body: 'More words and stuff.',
      },
      {
        id: 2,
        title: 'Note 3',
        body: 'Even more words and stuff.',
      },
    ],
  };

  render() {
    return (
      <Router>
        <div className="App">
            <Sidebar />
            <Route exact path={"/"} render={()=><NoteList notes={this.state.notes} />} />
            <Route exact path={"/create"} render={()=><CreateNote />} />
        </div>
      </Router>
    );
  }
}

export default App;
