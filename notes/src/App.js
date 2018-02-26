import React from 'react';

// Components
import Sidebar from './comps/Sidebar';

export default class App extends React.Component {
  render() {
    return (
      <div className="App__container">
        <div className="sidebar__container">
          <Sidebar />
        </div>
        <div className="notesList__container">
          This will be the list of notes
        </div>
      </div>
    );
  }
}
