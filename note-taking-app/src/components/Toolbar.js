import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    return (
      <div>
          <h3>Lambda Note</h3>
          <button onClick={console.log('')}>View Your Notes</button>
          <button onClick={console.log('')}>+ Create New Note</button>
      </div>
    );
  }
}

export default Toolbar;