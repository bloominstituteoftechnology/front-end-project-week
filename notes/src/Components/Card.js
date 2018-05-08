import React from 'react';
import ReactMarkdown from 'react-markdown'


export default props => {
  const { note } = props;
  return (
    <li className="note-item">
      <h3 className="note-card-title">
        <ReactMarkdown source={'##' + note.title.substring(0, 19)}/>
      </h3>
      <hr/>
      <p className="note-card-content">
        <ReactMarkdown source={note.content.substring(0, 120) + '...'}/>
      </p>
    </li>
  );
}