import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tag: [],
			title: "",
			text: "",
			editedNote: false
		};
	}

	componentDidMount() {
		console.log(this.props.notes);
		this.props.notes.map(note => {
			if (this.props.match.params.id === note._id) {
				console.log(note);
				this.setState({ title: note.title, text: note.textBody });
			}
		});
	}

	inputHandler = event => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
   };

   submitHandler = event => {
   		event.preventDefault();
   		const id = this.props.match.params.id;
   		const note = {
   			title: this.state.title,
   			textBody: this.state.body
   		};
   		console.log(note);
   		axios
   			.put(`http://fe-notes.herokuapp.com/note/edit/${id}`, note)
   			.then(response => {
   				console.log(response);
   				this.setState({ title: "", text: "", editedNote: true });
   			})
   			.catch(() => alert("Error editing note"));
   };

   render() {
   		if (this.state.editedNote) {
   			this.props.getNotes();
   			return <Redirect to="/" />;
   		}
   		return (
   			<div className="page-wrapper">
   				<h2>Edit Note:</h2>
   				<form onSubmit={this.submitHandler}>
   					<input
   						required
   						className="inputTitle"
   						placeHolder="Note Title"
   						name="title"
   						value={this.state.title}
   						onChange={this.inputHandler}
   					/>
   					<textarea 
   						required
   						className="inputContent"
   						placeHolder="Note Content"
   						name="text"
   						value={this.state.text}
   						onChange={this.inputHandler}
   					/>
   					<button type="submit">Update</button>
   				</form>
   			</div>
   		);
   }
}

export default EditNote;