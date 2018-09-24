// React
import React from 'react';

const EditView = props => {
	return(
		<div className = 'main-content'>
			<div className = 'edit'>
				<form className = 'form'>
					<h2>Edit Note:</h2>
					<input 
						className = 'note-title-input' 
						type = 'text' 
						placeholder = { props.note.noteTitle } 
					/>

					<textarea 
						className = 'note-content-text-area' 
						placeholder = { props.note.noteContent } 
					/>

					<div className = 'btn save-btn'>Update</div>
				</form>
			</div>
		</div>
	);
}

export default EditView;
