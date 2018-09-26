import React, { Component } from 'react';

class Nav extends Component {
  render() {
    const { toggleNote, showNote, viewNote, toggleHome } = this.props;
    
    return (
      <div className="nav-container">
        <div className="nav-logo">Notes</div>
        <button className="nav-button" onClick={() => toggleNote()} >
          { showNote ? 'Create New Note' :  'Create New Note' }
        </button> 
        <button className="nav-button" onClick={() => toggleHome()} >
        { viewNote ? 'View Your Notes' :  'View Your Notes' }
        {this.setState.viewNote = true}
        </button> 
      </div>
    );
  }
}

export default Nav;