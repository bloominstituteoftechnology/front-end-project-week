import React from 'react';

const newNote = (props) => {
	return (
		<form onSubmit={props.onSave}>
		 <h2 id='form-header'>Create New Note:</h2>
		 <input type ="text" id="Note Title" placeholder="Note Title" onChange={props.updateNoteTitle} />
		 <input type="text" id="Note Content"placeholder="Note Content" onChange={props.updateNoteContent} />
     <input type="save" value="Save" />
		 </form>
	  );			 
	}

export default newNote;
