import React from 'react';

function MultNote(props) {
  console.log('props on multnote: ' + props.meat)
  return (
    <div className="ViewNotes__Note">
      <div className="ViewNotes__Note__Title">
        <h1>{props.note}</h1>
      </div>
      <div>
        <h2>{props.meat}</h2>
      </div>
    </div>
  );
}

export default MultNote;
