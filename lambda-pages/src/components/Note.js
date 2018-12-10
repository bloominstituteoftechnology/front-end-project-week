import React from 'react';
import ReactMarkdown from 'react-markdown';

const Note = props => {
  const input = props.note.textBody;
  return (
    <div>
      <ReactMarkdown source={input} />
    </div>
  );
};

export default Note;
