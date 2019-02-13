import React, { Component } from 'react';
import Note from '../Notes/Note';

class Notes extends Component{
	render(){
		return(
			<div>
			{this.props.Notes(note => {
				return(
					<Note key={note._id} title={note.title} content={note.textBody}/>
				)
			})}
			</div>
		)
	}
}

export default Notes;
