import React from 'react';
import { Link } from 'react-router-dom';

class NotesList extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div id="sidebar-header">
            <h1>Lambda Notes</h1>
          </div>
          <ul>
            <li>
              <Link to="/" className="btn btn-info btn-block">View Notes</Link>
            </li>
            <li>
              <Link to="/create" className="btn btn-info btn-block">+ Create New Note</Link>
            </li>
          </ul>
        </nav>
        <div id="content">
          <p>Header here...</p>
        </div>
      </div>
    )
  }
}

export default NotesList;
