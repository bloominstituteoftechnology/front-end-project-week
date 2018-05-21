import React from 'react';
import { NavLink } from 'react-router-dom';

function MultNote(props) {
  return (
    <NavLink to={`/viewsinglenote/${props.title}`}>
      <button className="ViewNotes__Note">
        <div className="ViewNotes__Note__Title">
          <h1>{props.title}</h1>
        </div>
        <div>
          <h2>{props.meat}</h2>
        </div>
      </button>
    </NavLink>
  );
}

export default MultNote;