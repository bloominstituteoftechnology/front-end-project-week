import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard.js';
import { Row, Col } from 'reactstrap';
import './index.css';
import axios from 'axios';

class ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		};
	}

componentDidMount() {
	this.gatherNotes();
}

gatherNotes = () => {
	axios.get('https://blooming-dusk-34216.herokuapp.com/notes/')
		.then(response => {
			console.log(response)
			this.setState({ notes: response.data });
		})
		.catch(error => console.log(error));
	}

render() {
	return (<div className='wrapper'>
			<div>
				<Row>
					<Col className='alignRight'>
						<span className='toplinks'><Link to =''><button className='registerButton' color='link'>Register</button></Link></span>
						<span><Link to =''><button className='editButton' color='link'>Login</button></Link></span>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='head'>
							<h5> Your Notes:</h5>
						</div>
						<br />
						<div className='cards'>
							{ this.state.notes.map( (note, index) => <div><Link to='/NoteView' style={{ textDecoration: 'none' }}><NoteCard className='eachcard' key={index} updateSelectedNotecard={this.props.updateSelectedNotecard} { ...note} /><br /></Link></div>)};
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}
}

export default ListView;

// 21May - Yeah, I have no idea what I'm doing with this yet. At some point we have to map through all the cards and display them but I'm not sure if I'll end up doing that in this component or elsewhere. It's here for right now.
// 22May - Right now I'm using this to display a list of all my notecards. I suppose that eventually we want that list to display more as blocks rather than a vertical list but one thing at a time.
// 24May - Figured out how to get rid of text decoration whenever I hover over a card - you have to style the link because that is where the 'a' element is hiding.
