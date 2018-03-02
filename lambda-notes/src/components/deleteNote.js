import React from 'react';
import { NavLink } from 'react-router-dom';
import DeletePopup from './deletePopup';

const DeleteNote = (props) => {
    console.log('props', props);
    const getNoteIndex = () => {
      for (let i = 0; i < props.notes.length; i++) {
          if (+props.match.params.id === props.notes[i].id) {
              // console.log('index in if statement: ', i)
              return i;
          }
      
      }
      // console.log('How is i defined here? ')
    }
    return (
        <div className="view-note-container">
          <DeletePopup props={props}/>
          <div className="edit-button">
            <NavLink className="edit-link--popup" to="#">
              edit
            </NavLink>
          </div>
          <div className="delete-button">
            <NavLink className="delete-link--popup" to={`/delete/${props.match.params.id}`}>
              delete
            </NavLink>
          </div>
          <div className="view-note__title">
          {props.notes[getNoteIndex()].title}
          </div>
          <div className="view-note__body">
          {props.notes[getNoteIndex()].body}
          </div>
        </div>
      )
}
export default DeleteNote;