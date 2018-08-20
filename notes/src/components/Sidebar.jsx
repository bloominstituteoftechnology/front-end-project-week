import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebarContainer'>
        <div className='sidebarTitle'>Lambda Notes</div>
        <div className='sidebarButton'>View Your Notes</div>
        <div className='sidebarButton'>+ Create New Note</div>
      </div>
    );
  }
}

export default Sidebar;