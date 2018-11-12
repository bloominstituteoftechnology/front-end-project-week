import React from 'react';
import NavBar from './NavBar';
import SingleNote from './SingleNote';
import { Link } from 'react-router-dom';

const NoteView = props => {

  //

  return (
    <div className='note-view'>
      <NavBar />
      <div className='single-note-extended-container'>
        <div>
        
        <Link to={`/note/edit/${props.note._id}`} className='edit-view'>
        edit
          </Link>
          {/* <Link to="/EditView" className='edit-view'>
            edit
          </Link> */}
          <Link to={`/note/delete/${props.note._id}`} className='delete-modal'>
          delete
          </Link>
          {/* <button>edit</button> */}
          {/* <button>delete</button> */}
        </div>
        <ul>
          <SingleNote note={props.note}/>
        </ul>
        {/* <h3>Note Title (need to update for each note)</h3>
        <p>Note Content (need to update for each note). No max length!!!</p> */}
      </div> 
    </div>
  )
}

export default NoteView;
// this.props if it is a class b/c state would be declared b/c instance
// props when it is a fn like here.