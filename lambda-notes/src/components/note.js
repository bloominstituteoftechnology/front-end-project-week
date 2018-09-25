// import React from 'react';
// import './note.css';
// const Note = props => {
//     return (
//         <div className="oneNote" key={props.id}>
//           <h2>{props.title}</h2>
// 	  <p>{props.text}</p>
// 	</div>
//     );
// };
// Note.defaultProps = {
//     id: 0,
//     title: '',
//     text: ''
// };
// export default Note;


import React, { Component } from 'react';
import axios from 'axios';

export default class Note extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    note: null
	};
    }
    componentDidMount() {
	const id = this.props.match.params.id;
	this.fetchNote(id);
    }

    fetchNote = id => {
	axios
	    .get(`http://localhost:3333/note/${id}`)
	    .then(response => {
		this.setState(() => ({ movie: response.data}));
	    })
	    .catch(error => {
		console.error(error);
	    });
    }

    render() {
	if (!this.state.note) {
	    return <div>Loading note...</div>;
	}

	const {id, title, text} = this.state.note;
	return(
            <div></div>
	)
	
    }
}

