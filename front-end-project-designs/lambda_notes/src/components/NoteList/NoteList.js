import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';

import Note from "../Note/Note";

const NoteListContainer = styled.div`
	background-color: #f2f1f2;
    /* width: 100%; */
	padding: 40px;
	display: flex;
    flex-wrap: wrap-reverse;
    
    h2 {
		width: 100%;
		color: #414242;
		order: 1;
	}
	
	.note-link {
		/* max-width: 25%; */
	}
`;

const NoteCardContainer = styled.div`
	background-color: #ffffff;
	color: #20272d;
	/* width: 10%; */
	width: 180px;
	/* min-width: 150px; */
    min-height: 150px;
    margin: 20px;
	padding: 15px;
	border: 1px solid #dbdbdb;
	border: 2px solid red;
`;

class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			id: '',
            title: '',
            tags: '',
            textBody: ''
		};
	}

	componentDidMount() {
		
		axios
			.get("https://fe-notes.herokuapp.com/note/get/all")
			.then(res => {
				console.log("Server Response :", res);
				this.setState({ notes: res.data });
			})
			.catch(err => {
				console.log("Server Error: ", err);
			});
	}



	render() {
		console.log('Notelist props', this.props)
		return (
			<NoteListContainer>
				<h2 className="lamba-notes-header">Your Notes:</h2>
				{this.state.notes.map(note => {
					return (
						<Link to={`/notes/${note._id}`} className="note-link">
						<NoteCardContainer
							// onClick={this.props.history.push(`/notes/${note._id}`)}
							key={note._id}
							className="note-card"
						>
							<p>{note.title}</p>
							<p>{note.textBody}</p>
						</NoteCardContainer>
                        {/* <Note 
                            key={note._id}
                            title={note.title}
                            tags={note.tags}
							textBody={note.textBody}
							id={note._id}
							// onClick={this.props.history.push(`/notes/${note._id}`)}
                        /> */}
						</Link>
                    )
				})}
			</NoteListContainer>
		);
	}
}

export default NoteList;
