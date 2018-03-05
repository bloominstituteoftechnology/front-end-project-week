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
              <a className="btn btn-info btn-block" href="/">View Notes</a>
            </li>
            <li>
              <a className="btn btn-info btn-block" href="/create">+ Create New Note</a>
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
