// React
import React from 'react';

const CreateNewView = () => {
	return(
		<div className = 'main-content'>
			<div className = 'create-new'>
				<form className = 'form'>
					<h2>Create New Note:</h2>
					<input 
						className = 'note-title-input' 
						type = 'text' 
						placeholder = 'Note Title' 
					/>

					<textarea 
						className = 'note-content-text-area' 
						placeholder = 'Note Content' 
					/>

					<div className = 'btn save-btn'>Save</div>
				</form>
			</div>
		</div>
	);
}

export default CreateNewView;
