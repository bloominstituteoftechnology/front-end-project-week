import React from 'react';
import ReactMarkdown from 'react-markdown';

const NoteView = (props) => {
  return <ReactMarkdown source={props.currentNote.content} />
}

export default NoteView;