import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SingleNote = props => {
  const [note, setNote] = useState([]);
  const {id} = props.match.params 
  useEffect(() => {
    axios.get(`https://lambda-notes-build.herokuapp.com/api/notes/${id}`).then(res => setNote(res.data)).catch(err => console.log(err));
  },[]);
	return (
		<div className="single-container">
			<div className="button-container">
				<Link to={`/edit-form/${note.id}`}>Edit</Link>
				<p >Delete</p>
			</div>
			<h2>{note.title}</h2>
			<p>{note.textBody}</p>
		</div>
	);
};

export default SingleNote;
