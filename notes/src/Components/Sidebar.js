import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
export default class Sidebar extends Component {
  render() {
    return (
      <div className="Nav">
        <h1 id="title"> Lambda<br />Notes</h1>
        <Link to='/AllNotes'>
          <button>View Your Notes</button><br />
        </Link>
        <Link to='/AddNote'>
          <button>+ Create New Note</button>
        </Link>
      </div>
    )
  }
}
