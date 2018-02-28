import React, { Component } from 'react';

class LeftColumn extends Component {
  render() {
    return(
      <div className="left-column">
        <h1>Lambda Notes</h1>
        <button>View Your Notes</button>
        <button>+ Create New Note</button>
      </div>
    );
  }
}

export default LeftColumn;
