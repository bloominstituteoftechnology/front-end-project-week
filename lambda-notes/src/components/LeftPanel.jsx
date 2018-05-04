import React from 'react';
import { Link } from 'react-router-dom';

export const LeftPanel = () => (
  <div className="LeftPanel">
    <h1>Lambda Notes</h1>
    <Link to="/">
      <button className="NoteButton">View Your Notes</button>
    </Link>
    <Link to="/new">
      <button className="NoteButton">+ Create Note</button>
    </Link>
  </div>
);