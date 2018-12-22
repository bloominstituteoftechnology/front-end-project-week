import React from 'react';
import Note from './Note';
import { Route, Link, NavLink } from 'react-router-dom';

class NoteList extends React.Component{
  render(){
    return(
      <div className='main-page'>
        <h3>Your Notes:{' '}</h3>
        <ul>
        {this.props.notes.map(note => {
          return(
            <div className='each-note'>
            <Note
              key={note.id}
              title={note.title}
              textBody={note.textBody}
            />
            <div className='buttons'>
            <button
                onClick={() => {
                  this.props.deleteNote(
                    note._id
                  )
                }}>Delete</button>
                <Link to='/edit-form'>
                <button
                    onClick={(ev) => {
                      this.props.history.push('/edit-form');
                      console.log(note._id);
                      console.log(ev);
                      console.log(note);
                      this.props.editNote(
                        ev, note
                      )
                    }}>Edit</button></Link>
            </div>
            </div>
          )
        })}
        </ul>
      </div>
    )}
}

Note.defaultProps = {
 notes: [],
};

export default NoteList;
