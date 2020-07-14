import React from 'react';
import './note.css';
const Note = props => {
    // console.log(props);
    return (
        <div className="oneNote" key={props.id}>
          <h2>{props.title}</h2>
	  <p>{props.text}</p>
	</div>
    );
};
Note.defaultProps = {
    id: 0,
    title: '',
    text: ''
};
export default Note;
//          <h2>{props.location.state.note.title}</h2>

// import React, { Component } from 'react';
// import axios from 'axios';
// export default class Note extends Component {
//     constructor(props) {
// 	super(props);
// 	this.state = {
// 	    note: null
// 	};
//     }
//     componentDidMount() {
// 	axios
// 	    .get(`http://localhost:3333/notes/${Note.id}`)
// 	    .then(response => {
// 		const notes = response.data;
// 		this.setState({notes});
// 	    })
// 	    .catch(error => {
// 		console.error(error);
// 	    });
//     }
//     render() {
// 	if (!this.state.note) {
// 	    return <div>Loading note...</div>;
// 	}
// 	const {id, title, text} = this.state.note;
// 	return(
//             <div className="save-wrapper">
//               <h2>{title}</h2>
//               <p>{text}</p>
// 	    </div>
// 	);	
//     }
// }

