import React, { Component } from 'react';

class Panel extends Component {
  addNote = (event) => {
      console.log('hi')
  }

  render() {
    return (
      <div className="Panel">
        <p>Lambda Notes</p>
        <button>View Your Notes</button>
        <button onClick={this.addNote}>+ Create New Note</button>
      </div>
    );
  }
};

export default Panel;
