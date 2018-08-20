import React from 'react';

export const Note = (props) => {
  return (
    <div>
      <div>
        <button>Edit</button><button>Delete</button>
      </div>
      <h3>{props.note.title}</h3>
      <p>{props.note.note}</p>
    </div>
  )
}
