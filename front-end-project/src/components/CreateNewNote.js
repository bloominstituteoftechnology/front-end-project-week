import React from 'react';

const CreateNewNote = (props) => {
	return (
		<form onSubmit={props.onSave}>
		 <h2 id='form-header'>Create New Note:</h2>
		 <input type ="text" id="Note Title" placeholder="Note Title" />
		 <input type="text" id="Note Content"placeholder="Note Content" />
     <input type="save" value="Save" />
		 </form>
	  );			 
	}

export default newNote;
