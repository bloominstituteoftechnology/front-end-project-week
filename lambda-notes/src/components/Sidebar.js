import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div>
         <h1>Lambda Notes</h1>
          <button> View Your Notes</button>
          <button> + Create New Note</button>
      </div>
    );
  }
}

export default Sidebar;