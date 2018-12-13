import React from "react";
import styled from "styled-components";

const NewNoteForm = styled.form`
	margin-left: 260px;
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

	&:focus {
        outline: 0;
        -moz-box-shadow: 0px 0px 0px 2px #24b8bd;
        -webkit-box-shadow: 0px 0px 0px 2px #24b8bd;
        box-shadow: 0px 0px 0px 2px #24b8bd;
    }
`;

const NewNoteFormTextArea = styled.textarea`
	padding: 5px;
	font-family: inherit;
	letter-spacing: inherit;
	font-size: 1rem;
	/* border-radius: 3px; */
	resize: none;
	width: 600px;
	height: 400px;
	white-space: pre-wrap;

	&:focus {
        outline: 0;
        -moz-box-shadow: 0px 0px 0px 2px #24b8bd;
        -webkit-box-shadow: 0px 0px 0px 2px #24b8bd;
        box-shadow: 0px 0px 0px 2px #24b8bd;
    }
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
			title: '',
			textBody: '',
			id: '',
		};
	}

	componentDidMount() {
        this.props.notes.forEach( note => {
            if (`${note._id}`  === this.props.match.params.noteId)  {
                this.setState({
                    title: note.title,
                    textBody: note.textBody
                })
            }
        })
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
		setTimeout(
			() =>
				this.props.history.push(
					`/notes/${this.props.match.params.noteId}`
				),
			500
		);
	};

	render() {
		// console.log("Edit Form Props", this.props);
		// console.log("Edit Form state", this.state);
		return (
			<NewNoteForm onSubmit={this.handleSubmit}>
				<h2>Edit Note:</h2>
				<NewNoteFormInput
					type="text"
					value={this.state.title}
					name="title"
					onChange={this.handleChange}
				/>
				<NewNoteFormTextArea
					value={this.state.textBody}
					name="textBody"
					onChange={this.handleChange}
				/>
				<NewNoteFormButton type="submit">Save</NewNoteFormButton>
			</NewNoteForm>
		);
	}
}

export default EditNoteForm;
