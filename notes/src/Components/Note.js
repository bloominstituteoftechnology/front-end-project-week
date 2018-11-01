import React from 'react';

const Note = props => {
  return (
    <div className="note-list--note" key={props._id}>

      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <div className='tags'>
        {props.tags.map(tag => (
          <span className='tag'>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Note;