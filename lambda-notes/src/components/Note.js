// React
import React from 'react';

const Note = props => {
	const { exactInput, note, history } = props;
	const allowedTags = ['grin-beam', 'angry', 'grin-squint-tears', 'frown'];
	const tags = [];

	for (let i = 0; i < allowedTags.length; i++) {
		if (note.tags && note.tags.includes(allowedTags[i])) tags.push(allowedTags[i]);
	}

	return(
		<div className = 'note-wrapper'>
			<div onClick = { () => history.push(`/note/${ note._id }`) } className = 'note'>
				{ 
					exactInput && note.title.includes(exactInput) ? (note.title.length > 11 ? <p><span className = 'highlight'>{ note.title.substr(note.title.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.title.substr(note.title.indexOf(exactInput)).slice(exactInput.length, 11) + '...' }</p> : <p><span className = 'highlight'>{ note.title.substr(note.title.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.title.substr(note.title.indexOf(exactInput)).slice(exactInput.length) }</p>) : 

					(note.title.length > 11 ? <p>{ note.title.slice(0, 11) + '...' }</p> : <p>{ note.title }</p>)
				}

				<hr />

				{ 
					exactInput && note.textBody.includes(exactInput) ? (note.textBody.length > 85 ? <p><span className = 'highlight'>{ note.textBody.substr(note.textBody.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.textBody.substr(note.textBody.indexOf(exactInput)).slice(exactInput.length, 85) + '...' }</p> : <p><span className = 'highlight'>{ note.textBody.substr(note.textBody.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.textBody.substr(note.textBody.indexOf(exactInput)).slice(exactInput.length) }</p>) : 

					(note.textBody.length > 85 ? <p>{ note.textBody.slice(0, 85) + '...' }</p> : <p>{ note.textBody }</p>)
				}
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
