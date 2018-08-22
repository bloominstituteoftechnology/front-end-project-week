import React from "react";

const Form = props => {
	return (
		<div className="AddNoteWrapper">
			<form
				className="AddNote__form"
				id="editNoteForm"
				onSubmit={props.onSubmit}
			>
				<input
					className="AddNote__form-title"
					type="text"
					placeholder="Note Title"
					value={props.title}
					name="title"
					autoComplete="off"
					onChange={props.handleInputChange}
				/>
				<input
					type="text"
					placeholder="Tags"
					value={props.tags}
					name="tags"
					autoComplete="off"
					onChange={props.handleInputChange}
				/>
				<span className="AddNote__form-tagInstructions">
					Separate tags with a comma
				</span>
				<textarea
					id="editNoteForm"
					cols="30"
					rows="10"
					name="textBody"
					placeholder="Note Content"
					value={props.textBody}
					onChange={props.handleInputChange}
				/>
				<button className="Button">{props.label}</button>
			</form>
		</div>
	);
};

export default Form;
