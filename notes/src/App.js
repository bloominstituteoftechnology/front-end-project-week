import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="App__container">
        <div className="sidebar__container">This will be the sidebar</div>
        <div className="notesList__container">
          This will be the list of notes
        </div>
      </div>
    );
  }
}
