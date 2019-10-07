import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const Navbar = props => {
  return(
    <div className="nav-bar">
      <div className="app-name">Lambda <br />Notes</div>
      <Link to="/">
        <button
          className="btn"
          onClick={() => props.fetchPosts()}
        >
          View Your Notes
        </button>
      </Link>
      <Link to="/new"><button className="btn">+ Create New Note</button></Link>
    </div>
  );
}

export default connect(null, { fetchPosts })(Navbar);
