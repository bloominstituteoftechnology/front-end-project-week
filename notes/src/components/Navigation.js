import React from 'react';
import { withRouter } from 'react-router';
import './Navigation.css';

const Navigation = ({ history }) => (
  <div className="navContainer">
    <h1 className="navHeader">Lambda<br />Notes</h1>
    <div className="navButtonContainer">
      <button className="navButton" onClick={() => { history.push('/') }}>View Your Notes</button>
      <button className="navButton" onClick={() => { history.push('/create') }}>+ Create New Note</button>
    </div>
  </div>
);

export default withRouter(Navigation);
