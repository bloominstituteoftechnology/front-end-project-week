import React from 'react';
import {
	Note
} from '../components/Note.js';
import '../components/Notes.css';
export default class Notes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (<div> <h3> Your Notes: </h3>   <div className = 'container'> {
			this.props.notes.map((note, index) => {
				return <Note id = {note._id} key = {index} note = {note} > </Note> 
			})
		} </div></div> )
	}
}