import React from 'react';
import ReactMarkdown from 'react-markdown'


export default props => {
  const { note } = props;
  return (
    <li className="note-item">
      <ReactMarkdown
        className="note-card-title"
        source={'#' + note.title.substring(0, 19)}/>
      <hr/>
      <ReactMarkdown
        className="note-card-content"
        source={note.content.substring(0, 120) + '...'}/>
    </li>
  );
}