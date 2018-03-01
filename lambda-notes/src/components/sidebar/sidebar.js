import React, { Component } from 'react';

class LambdaNotesSidebar extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Lambda</h1>
          <h1>Notes</h1>
        </header>
        <div className="sidebar-note-buttons">
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
        </div>
      </div>
    );
  }
}

export default LambdaNotesSidebar;
