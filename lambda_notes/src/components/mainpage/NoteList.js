import React from 'react';
import './notelist.css';

const NoteList = (props) => {
  return props.notesArr.map((elem, i) => {
    return (
      <div key={i} className="noteList__container"
        onClick={() => {
          props.viewNote(elem);
          props.changeSwitch(`${elem.title}`,'noteView')}
        }
      >
        <div className="noteList__box">
          <div className="noteList__box-title">{elem.title}</div>
          <div className="noteList__box-content">{elem.content}</div>
        </div>
      </div>
    );
  });
}

export default NoteList;