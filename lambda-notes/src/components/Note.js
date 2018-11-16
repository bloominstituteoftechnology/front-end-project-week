import React from 'react';

const Note = props => {
  return (
    <div className="Note">
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
