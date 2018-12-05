import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// A lot of code is from Reactstrap documentation

class ViewNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			text: "",
			id: ""
		};
	}

	componentDidMount() {
    	console.log('TEST')
    	axios
      		.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      		.then(response => {
        		this.setState({ textBody: response.data.textBody, title: response.data.title, id: response.data._id });
      		})
      		.catch(err => {
      			console.log(err)
      		});
  	}

	deleteNote = id => {
		axios
			.delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.id}`)
			.then(response => {
				this.props.history.push("/");
			})
			.catch(error => {
				console.log("Delete Error")
			});
	};

	render() {
		console.log(this.props.match.params.id);
		if (this.state.toList) {
			return <Redirect to="/" />;
		}
		return (
			<div className="page-wrapper">
					<div className="action-btns">
						<Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
						<a onClick={this.deleteNote}>Delete</a>
					</div>
				{this.props.notes.map(note => {
					if (this.props.match.params.id === note._id) {
						console.log(note.title);
						return (
							<div className="margin" key={note._id}>
								<p className="ViewNoteTitle">{note.title}</p>
								<p className="ViewNoteText">{note.textBody}</p>
							</div>
						);
					}
				})}
			</div>	
		);
	}
}

export default ViewNote;