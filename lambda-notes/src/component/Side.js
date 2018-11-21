import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Side extends Component {
  render() {
    return (
      <div>
        <h1>Lambda</h1>
        <h1>Notes</h1>
        <Link to="/">List</Link>
        <Link to="/new-note">Note+</Link>
      </div>
    );
  }
}

export default Side;
