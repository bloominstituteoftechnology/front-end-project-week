import React from 'react';

const Notes = (props) => {
  console.log('Notes props', props);
  return (
    <div>
      {props.notes.map((note, index) => {
        return (
          <div className="Note" key={index}>
            <li>{note}</li>
          </div>
        )
      })}
    </div>
  )
}

 export default Notes;