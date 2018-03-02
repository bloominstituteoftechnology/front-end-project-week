import React from 'react';
import { NavLink } from 'react-router-dom';

function MultNote(props) {
  return (
    <NavLink to={`/viewsinglenote/${props.title}`}>
      <div className="ViewNotes__Note">
        <div className="ViewNotes__Note__Title">
          <h1>{props.title}</h1>
        </div>
        <div className="ViewNotes__Note__Meat">
          <h2>{props.meat}</h2>
        </div>
      </div>
    </NavLink>
  );
}

export default MultNote;
