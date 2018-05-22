import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard.js';
import NoteView from './NoteView.js';


class ListView extends Component {
	render() {
		return (
			<div>
				{ this.props.cards.map( (card, index) => <div><Link to='/NoteView'><NoteCard key={index} /></Link></div>)}
			</div>
		)
	}
}

export default ListView;

{/* 21May - Yeah, I have no idea what I'm doing with this yet. At some point we have to map through all the cards and display them but I'm not sure if I'll end up doing that in this component or elsewhere. It's here for right now. */}
