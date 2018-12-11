import React from "react";
import styled from "styled-components";
import axios from "axios";

const NewNoteForm = styled.form`
	background: #f2f1f2;
	width: 100%;
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
`;

const NewNoteFormInput = styled.input`
	width: 40%;
	padding: 5px;
	margin: 15px 0;
	font-size: 1rem;
	/* border-radius: 3px; */
`;

const NewNoteFormTextArea = styled.textarea`
	padding: 5px;
	font-family: inherit;
	letter-spacing: inherit;
	font-size: 1rem;
	border-radius: 3px;
	resize: none;
	width: 600px;
	height: 400px;
`;

const NewNoteFormButton = styled.button`
	/* width: 80%; */
	background-color: #24b8bd;
	border: 0;
	color: #f3f9f9;
	padding: 12px 15px;
	margin: 15px 0;
	width: 180px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
`;
// ========== END OF STYLES ==================

class EditNoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			title: this.props.title,
            // textBody: this.props.note.textBody,
            // id: this.props.note._id
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = event => {
        event.preventDefault();
        let editedNote = {
			title: this.state.title,
			textBody: this.state.textBody,
		};
        this.props.editNote(editedNote, this.props.match.params.noteId);
        setTimeout( () => this.props.history.push(`/notes/${this.props.match.params.noteId}`), 500);
		// event.preventDefault();
		// let editedNote = {
		// 	title: this.state.title,
		// 	textBody: this.state.textBody,
		// };

		// axios
		// 	.put(`https://fe-notes.herokuapp.com/note/edit/${
        //         this.state.id
        //     }`, editedNote)
		// 	.then(
		// 		res => (
		// 			console.log("PUT Server Response: ", res),
		// 			this.setState({
		// 				title: res.data.title,
		// 				textBody: res.data.textBody,
		// 				id: res,
		// 			})
		// 		)
		// 	)
		// 	.catch(err => console.log("PUT Server Error: ", err));

		// this.props.history.push(`/notes/${this.props.note._id}`)
	};

	render() {
		console.log("Edit Form Props", this.props);
		return (
			<NewNoteForm onSubmit={this.handleSubmit}>
				<h2>Edit Note:</h2>
				<NewNoteFormInput
					type="text"
					defaultValue={this.props.title}
					name="title"
					onChange={this.handleChange}
				/>
				<NewNoteFormTextArea
					// defaultValue={this.props.note.textBody}
					name="textBody"
					onChange={this.handleChange}
				/>
				<NewNoteFormButton type="submit">Save</NewNoteFormButton>
			</NewNoteForm>
		);
	}
}

export default EditNoteForm;
