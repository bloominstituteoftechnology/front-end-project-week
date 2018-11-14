import React from 'react';

import '../../App.css'

class Sidebar extends React.Component {
    render() {
      return (
        <div className="sidebar">

         <h1 className="title">Lambda Notes</h1>

         <div className="button">View Your Notes</div>

         <div className="button">+ Create New Note</div>

        </div>
      );
    }
  }
  
  export default Sidebar;