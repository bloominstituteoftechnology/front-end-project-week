import React from 'react';
import {Link} from 'react-router-dom';

const NewNoteForm = props => {
    return(
        <div>
   <h1>Create New Note:</h1>
      <div className="input">
        <input
      type="text" 
      value={props.title}
      placeholder="Title" 
    onChange={props.titleInput}
        />
        <input
        type="text" 
        value={props.text}
        placeholder="Note" 
        onChange={props.textInput}
        />
        <Link className="save" to="/">
          <button onClick={props.noteSubmit}>Save Note</button>
        </Link>
      </div>
        </div>

    );
};





export default NewNoteForm;



