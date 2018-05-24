import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard.js';
import './index.css';

class ListView extends Component {
	render() {
		return (
			<div className='wrapper'>
				<div className='head'>
					<h5> Your Notes:</h5>
				</div>
				<br />
				<div className='cards'>
					{ this.props.cards.map( (card, index) => <div><Link to='/NoteView'><NoteCard className='eachcard' key={index} updateSelectedNotecard={this.props.updateSelectedNotecard} { ...card} /><br /></Link></div>)}
				</div>
			</div>
		)
	}
}

export default ListView;

// 21May - Yeah, I have no idea what I'm doing with this yet. At some point we have to map through all the cards and display them but I'm not sure if I'll end up doing that in this component or elsewhere. It's here for right now.
// 22May - Right now I'm using this to display a list of all my notecards. I suppose that eventually we want that list to display more as blocks rather than a vertical list but one thing at a time.
