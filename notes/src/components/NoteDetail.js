import React from 'react';
import ReactDOM from 'react-dom';

function NoteDetail(props) {
	return(
		<div className="Note">
			<h1>Note Title: {props.title}</h1>
			<p>Note Body: {props.noteBody}</p> 
		</div>
	);
}

class NoteDetails extends React.Component {
	render() {
		return(
			<div className="Note">
				<h1>Your 2NoteTitle: {this.props.title}</h1>
				<p>Your noteBody: {this.props.noteBody}</p> 
			</div>
		);
	}
}
var app = (
	<div>		
		<NoteDetails noteTitle="David D" noteBody="64" />
		< NoteDetails noteTitle="Mac T" noteBody="52" />
	</div>
)
ReactDOM.render( NoteDetails, document.querySelector('#n1'));

export default  NoteDetail;