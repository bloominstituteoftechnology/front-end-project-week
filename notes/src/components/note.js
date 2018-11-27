import React from 'react';
import '../components/Note.css';
import {
	Link
} from 'react-router-dom'
export const Note = (props) => {
	return ( <div className = "note"> <h4> <Link style = {
			{
				textDecoration: "none",
				color: "black"
			}
		}
		to = {
			`/NoteView/${props.id}`
		} > {
			props.note.title
		} < /Link> <br /> <hr /> <br /> </h4>  <p> {
			props.note.textBody
		} </p>  </div> )
}