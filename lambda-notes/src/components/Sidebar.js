import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
    <div className='sidebar'>
        <h1>Lambda<br />Notes</h1>
        <Link to={`/`}>View Your Notes</Link>
        <Link to={`/create-new-note`}>+ Create New Note</Link>
    </div>
    );
  }
}

export default Sidebar;