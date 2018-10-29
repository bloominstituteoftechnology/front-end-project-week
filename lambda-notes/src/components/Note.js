// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

const Note = ({ exactInput, note, history }) => {
	return(
		<div className = 'note-wrapper'>
			<div onClick = { () => history.push(`/note/${ note.id }`) } className = 'note'>
				{ 
					// This line of code is taking the title, starting it where
					// the exact match is made, highlighting that match, and then
					// outputting the rest of the text that followed.
					exactInput && note.title.includes(exactInput) ? (note.title.length > 11 ? <h3><span className = 'highlight'>{ note.title.substr(note.title.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.title.substr(note.title.indexOf(exactInput)).slice(exactInput.length, 11) + '...' }</h3> : <h3><span className = 'highlight'>{ note.title.substr(note.title.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.title.substr(note.title.indexOf(exactInput)).slice(exactInput.length) }</h3>) : 

					(note.title.length > 11 ? <h3>{ note.title.slice(0, 11) + '...' }</h3> : <h3>{ note.title }</h3>)
				}

				<hr />

				{ 
					// This line of code is taking the content, starting it where
					// the exact match is made, highlighting that match, and then
					// outputting the rest of the text that followed.
					exactInput && note.content.includes(exactInput) ? (note.content.length > 85 ? <p><span className = 'highlight'>{ note.content.substr(note.content.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.content.substr(note.content.indexOf(exactInput)).slice(exactInput.length, 85) + '...' }</p> : <p><span className = 'highlight'>{ note.content.substr(note.content.indexOf(exactInput)).slice(0, exactInput.length) }</span>{ note.content.substr(note.content.indexOf(exactInput)).slice(exactInput.length) }</p>) : 

					(note.content.length > 85 ? <p>{ note.content.slice(0, 85) + '...' }</p> : <p>{ note.content }</p>)
				}
			</div>
		</div>
	);
}

Note.propTypes = {
	exactInput: PropTypes.string,
	history: PropTypes.shape({
		action: PropTypes.string,
		block: PropTypes.func,
		createHref: PropTypes.func,
		go: PropTypes.func,
		goBack: PropTypes.func,
		goForward: PropTypes.func,
		length: PropTypes.number,
		listen: PropTypes.func,
		location: PropTypes.shape({
			hash: PropTypes.string,
			key: PropTypes.string,
			pathname: PropTypes.string,
			search: PropTypes.string,
		}),
		push: PropTypes.func,
		replace: PropTypes.func,
	}),
	note: PropTypes.shape({
		content: PropTypes.string,
		id: PropTypes.number,
		title: PropTypes.string,
	}),
}

export default Note;
