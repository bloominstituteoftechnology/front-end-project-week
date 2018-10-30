import React from 'react';

import '../styles/Styles.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>Lambda Notes</h1>
      <div className='button'>
        View Your Notes
      </div>
      <div className="button">
        + Create New Note
      </div>
    </div>
  );
}

export default Sidebar;