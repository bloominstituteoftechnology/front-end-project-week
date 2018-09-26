import React, { Component } from 'react';

class Nav extends Component {
  render() {
    const { toggleNote, showNote } = this.props;
    
    return (
      <div className="nav-container">
        <div className="nav-logo">Notes</div>
        <button className="nav-button" onClick={() => toggleNote()} >
          { showNote ? 'Cancel' :  'Create New Note' }
        </button> 
      </div>
    );
  }
}

export default Nav;