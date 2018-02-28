import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">Lambda Notes</div>
        <Link to="/"><button className="viewnote">View Your Notes</button></Link><br/>
        <Link to="/addnote"><button>+ Create New Note</button></Link>
      </div>
    );
  }
}


export default SideBar;