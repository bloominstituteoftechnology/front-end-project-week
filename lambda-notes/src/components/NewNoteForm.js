import React from 'react';
import './NewNoteForm.css';
// import {connect} from 'react-redux';
// import {addNote} from '../actions'


const NewNoteForm = props => {


    return (
      <div className="new-note">
        <h3 className="title">Create New Note:</h3>
        <form className="form" onSubmit={props.addNote}>
          <textarea className="note-title" onChange={props.handleInputChange} type="text" name="title" placeholder="Title" value={props.title} />
          <textarea className="note-text"  onChange={props.handleInputChange} type="text" name="content" placeholder="Note" value={props.content}/>
          <button>
            Add Note
          </button>
        </form>
      </div>
    );
};

// const mapStateToProps = state => {
//   const {notesReducer} = state;
//   return{
   
//     note: notesReducer.note,
//     error: notesReducer.error,
//     addNote:notesReducer.addNote,
//     addingNote: notesReducer.addingNote,
   
//   };
// };







// export default connect(mapStateToProps,{addNote})(NewNoteForm);
export default NewNoteForm;



