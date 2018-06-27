import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import './index.css';
import axios from 'axios';

class EditNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: this.props.selectedNotecard._id,
			title: this.props.selectedNotecard.title,
			content: this.props.selectedNotecard.content
		}
	}

	//I initially had this zeroed out since in the assignment, the edit view is blank. But I thought it was kind of silly to have someone click on edit and then have to retype the whole thing if they only wanted to fix a typo or something, so I changed the edit view to show the current values (title, content) of the notecard.

editingNotes = event => {
	event.preventDefault();
	const editedNote = {
		_id: this.state._id,
		title: this.state.title,
		content: this.state.content
	};
	axios.put(`https://blooming-dusk-34216.herokuapp.com/notes/${this.state._id}`, editedNote)
		.then(response => {
			console.log(response)
			this.setState({ _id:'', title:'', content:'' });
		})
		.catch(error => console.log(error));
	}


handleInput = event => {
	this.setState({ [event.target.name]: event.target.value});
}

render() {
	return (
		<div className='wrapper'>
			<div className='head'>
				<h5>Edit Note:</h5>
			</div>
		<div className='createForm'>
			<Form>
				<FormGroup>
					<Input onChange={this.handleInput} name='title' type='textarea' value={this.state.title} id='noteTitle' placeholder='Note Title' />
				</FormGroup>
				<FormGroup>
					<Input onChange={this.handleInput} name='content' type='textarea' value={this.state.content} id='noteContent' placeholder='Note Content' />
				</FormGroup>
					<Link to='/'>
					<button className='createButton' onClick={this.editingNotes}>Update</button>
					</Link>
			</Form>
		</div>
	</div>

	);
}
}

export default EditNote;

//22 May - I dug deep into the React documentation to find this withRouter thing which is what I think I need to make sure the Router has access to the props it needs to do things correctly. It seems to work. Fingers crossed.
//25 May - refactored to exclude withRouter - forgot that I figured out how to pass props in Router using render, and now that that's working I don't really need withRouter. I removed it and it still works.
