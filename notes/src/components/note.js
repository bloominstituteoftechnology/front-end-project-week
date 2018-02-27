import React from 'react';
import ReactDOM from 'react-dom';

function Note(props) {
	return(
		<div className="Note">
			<h1>{props.title}</h1>
			<p>Your noteBody: {props.noteBody}</p> 
		</div>
	);
}

var app = (
	<div>		
		<Note noteTitle="David D" noteBody="64" />
		<Note noteTitle="Mac T" noteBody="52" />
	</div>
)
ReactDOM.render(Note, document.querySelector('#n1'));

export default Note;