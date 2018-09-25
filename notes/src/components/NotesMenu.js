import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotesMenu = () => {
  return (
    <div className = 'notes-menu'>
      <h1>Lambda Notes</h1>

      <Link className = 'link' to = '/'>
        View Notes
      </Link>

      <Link className = 'link' to = '/'>
        Create Note
      </Link>
    </div>
  );
};

export default NotesMenu;
