import React from 'react';
import NoteItem from './NoteItem';
import './listview.css';

const ListView = props => {
  return (
    <div className="list-view">
      <h2>Your Notes: </h2>
      <div className="tags">
        {' '}
        Tags:
        {props.tags.map((tag, index) => (
          <span
            key={index}
            data-tag={`${tag}`}
            className={props.activeTag === tag ? 'active' : null}
            onClick={props.tagSelectHandler}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="notes-container">
        {props.sortedNotes.map(note => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ListView;
