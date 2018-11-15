import React from 'react';

const Note = props => {
  return (
    <div className="Smurf">
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
};

Note.defaultProps = {
  title: '',
  content: ''
};

export default Note;
