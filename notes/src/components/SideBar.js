import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {

  render() {
    return (
      <div className='sidebar'>
        <h1>Lambda Notes</h1>
        <button>View Your Notes</button>
        <button>+ Create New Node</button>
        <button>Export Notes</button>
      </div>
    );
  }

}

export default SideBar;