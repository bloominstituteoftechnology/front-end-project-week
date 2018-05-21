import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export class NoteCard extends Component {
 constructor() {
	 super();
	 this.blankNote = {
	 	title: '',
		 text: ''
	 };


	 this.state = {
		 newNote: this.blankNote,
 	};
 }


handleInput = (event) => {
	this.setState({ newNote: {...this.state.newNote, ...{[event.target.name]: event.target.value} }});
};

handleSubmit = () => {
	this.setState({ newNote: this.blankNote });
};

render() {
	return(
		<div>
			<Card>
				<CardBody>
					<CardTitle>title</CardTitle>
					<CardText>text</CardText>
				</CardBody>
			</Card>
		</div>
	)
}
}
