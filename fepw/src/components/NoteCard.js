import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class NoteCard extends Component {
	constructor(props) {
		super(props);
		// this.state = 
	}

	render() {
		return (
		<div>
			<Card>
				<CardBody>
					<CardTitle></CardTitle>
					<CardText></CardText>
				</CardBody>
			</Card>
		</div>
		)
	}
}

export default NoteCard;

// 21May This is eventually going to be a notecard, I think. This is how I envision it would be but I have no idea if I am actually going to use this or if this will become a part of another component or what. It's way too early for me to know what I'm going to need - I have to start coding to figure that out as I go along.

