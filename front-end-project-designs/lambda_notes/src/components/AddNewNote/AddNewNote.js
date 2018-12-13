import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Alert } from "reactstrap";

const NewNoteForm = styled.form`
	background: #f2f1f2;
	margin-left: 260px;
	width: 100%;
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;

	.empty-form-alert {
		display: inline-block;
		width: 40%;
	}
`;

const NewNoteFormInput = styled.input`
	width: 400px;
	padding: 5px;
	margin: 15px 0;
	font-size: 1rem;
	border-radius: 3px;
	border: 1px solid #a9a9a9;

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
	border-radius: 3px;
	resize: none;
	width: 600px;
	height: 400px;

	&:focus {
		outline: 0;
		-moz-box-shadow: 0px 0px 0px 2px #24b8bd;
		-webkit-box-shadow: 0px 0px 0px 2px #24b8bd;
		box-shadow: 0px 0px 0px 2px #24b8bd;
	}
`;

const NewNoteFormButton = styled.button`
	display: inline-block;
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

class AddNewNote extends React.Component {
	constructor() {
		super();
		this.state = {
			notes: [],
			title: "",
			textBody: "",
			visible: false,
		};
		this.onDismiss = this.onDismiss.bind(this);
	}

	onDismiss() {
		this.setState({ visible: false });
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let newNote = {
			title: this.state.title,
			textBody: this.state.textBody,
		};

		if (this.state.title === "" || this.state.textBody === "") {
			this.setState({ visible: true });
		} else {
			axios
				.post("https://fe-notes.herokuapp.com/note/create", newNote)
				.then(res => () => {
					console.log("POST Server Response: ", res);
					this.setState({
						title: res.data.title,
						textBody: res.data.textBody,
						id: res,
					});
				})
				.catch(err => console.log("POST Server Error: ", err));
			setTimeout(() => this.props.history.push(`/notes`), 250);
		}
	};

	render() {
		return (
			<NewNoteForm onSubmit={this.handleSubmit}>
				<h2>Create New Note:</h2>
				<NewNoteFormInput
					type="text"
					placeholder="Note Title"
					name="title"
					onChange={this.handleChange}
				/>
				<NewNoteFormTextArea
					placeholder="Note Content"
					name="textBody"
					onChange={this.handleChange}
				/>
				<NewNoteFormButton type="submit">Save</NewNoteFormButton>
				<Alert
					color="danger"
					isOpen={this.state.visible}
					toggle={this.onDismiss}
					className="empty-form-alert"
				>
					Sorry, can't save an empty note!
				</Alert>
			</NewNoteForm>
		);
	}
}

export default AddNewNote;
