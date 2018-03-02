import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './notelist.css';

const NoteList = SortableContainer(props => {
  return (
    <ul className="sortable__container">
      {props.notesArr.filter(elem => elem.title.toLowerCase().includes(props.filterValue.toLowerCase()))
        .map((elem, i) => {
          return <Note key={`item${i}`} index={i} elem={elem} changeSwitch={props.changeSwitch} viewNote={props.viewNote} />
        })
      }
    </ul>
  )
});

const Note = SortableElement((props) => {
  return (
    <li className="noteList__container"
      onClick={() => {
        props.viewNote(props.elem);
        props.changeSwitch(`${props.elem.title}`,'noteView')}
      }
    >
      <div className="noteList__box">
        <div className="noteList__box-title">{props.elem.title}</div>
        <div className="noteList__box-content"><ReactMarkdown source={props.elem.content} /></div>
      </div>
    </li>
  );
});

export default NoteList;