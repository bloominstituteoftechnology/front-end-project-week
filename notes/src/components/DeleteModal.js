import React from 'react';
import NavBar from './NavBar';




const DeleteModal = props => {

  //

  return (
    <div className='note-view'>
      <NavBar />
      {/* <h1>ADD DROP DOWN MENU FOR DELETE</h1> */}
      <h5>Are you sure you want to delete this?</h5>
      <button onClick={() => props.deleteNote()} >Delete</button>
      <form>
        {/* <button onClick={()} >No</button> */}
        <input 
          type='button' 
          value='No'

        />
      </form>
      
      <div className='single-note-extended-container'>
        <div>
          {/* <a href='#'>edit</a> */}
          {/* <a href='#'>delete</a> */}
        </div>
        <h3>Note Title (need to update for each note)</h3>
        <p>Note Content (need to update for each note). No max length!!!</p>
      </div> 
    </div>
  )
}

export default DeleteModal;

// line 22          {/* onClick='window.location.href=#' */}