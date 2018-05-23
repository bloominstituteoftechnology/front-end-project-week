import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CreateNote/CreateNoteView.css';

class EditView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="NoteView">
        <p className="CreateNote-Header">Edit Note:</p>
        <form className="Form">
          <input 
          className="TitleInput"
          type="text" 
          placeholder="Note Title" 
          name="title"
          />
          <p>
            <textarea
            className="ContentInput" 
            row="50" cols="50" 
            placeholder="Note Content"
            name="content"
            ></textarea>
          </p>
        </form>
        <Link to="/home">
          <button 
          className="CreateViewButton">
            Update
          </button>
        </Link>
      </div>
    );
  }
}

export default EditView;