// React
import React from 'react';

const Note = props => {
	const allowedTags = ['grin-beam', 'angry', 'grin-squint-tears', 'frown'];
	const tags = [];

	for (let i = 0; i < allowedTags.length; i++) {
		if (props.note.tags && props.note.tags.includes(allowedTags[i])) tags.push(allowedTags[i]);
	}

	return(
		<div className = 'note-wrapper'>
			<div onClick = { () => props.history.push(`/note/${ props.note._id }`) } className = 'note'>
				<h3>{ props.note.title.length > 11 ? props.note.title.slice(0, 11) + '...' : props.note.title }</h3>
				<hr />
				<p>{ props.note.textBody.length > 85 ? props.note.textBody.slice(0, 85) + '...' : props.note.textBody }</p>
			</div>

			{ tags.length > 0 && 
				<div className = 'tags-div'>
					{ tags.map((tag, i) => <i key = { i } className = { `far fa-${ tag }` } />)}
				</div> 
			}
		</div>
	);
}

export default Note;
