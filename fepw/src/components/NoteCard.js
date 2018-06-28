import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './index.css';

class NoteCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			updateSelectedNotecard: this.props.updateSelectedNotecard
		}
	}

handleSelectNote = () => {
	this.state.updateSelectedNotecard({ _id: this.props._id, title: this.props.title, content: this.props.content });
}

	render() {
		return (
		<div>
			<Card onClick= {() => this.handleSelectNote()}>
				<CardBody className='notecard'>
					<CardTitle className='cardTitle'>{this.props.title}</CardTitle>
					<hr />
					<CardText className='truncate'>{this.props.content}</CardText>
				</CardBody>
			</Card>
		</div>
		)
	}
}

export default NoteCard;

// 21May This is eventually going to be a notecard, I think. This is how I envision it would be but I have no idea if I am actually going to use this or if this will become a part of another component or what. It's way too early for me to know what I'm going to need - I have to start coding to figure that out as I go along.
// 22May I decided to use this and linked it with the updateSelectedNotecard from main.js so that it would do the right thing.
// 25May removed the withRouter since it was redundant
// 28June I think this component probably makes the most sense out of all the ones I wrote. I basically just displays the notecards collected in ListView. Then if somebody selects one, it sends it to state for further processing by another component.
