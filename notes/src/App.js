import React from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';

// Components
import Sidebar from './comps/Sidebar';
import NoteList from './comps/NoteList';

class App extends React.Component {
  render() {
    return (
      <div className="App__container">
        <Sidebar />
        <div className="content__container">
          <Route path="/" component={NoteList} />
        </div>
      </div>
    );
  }
}

export default App;
