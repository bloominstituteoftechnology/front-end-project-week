import React, { Component } from 'react';
// import './note.css';
import Note from './note.js';
import Modal from './delete.js';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

// class Expand extends Component {
//     constructor(props) {
// 	super(props);
// 	this.state = { 
// 	    id: 0,
// 	    title: '',
// 	    text: '' 
// 	};
//     }    
//     toggleModal = () => {
// 	console.log('clicked!');
// 	this.setState({
// 	    isOpen: !this.state.isOpen
// 	});
//     };
//     render() {
// 	return (
// 	    <div className="oneNote" key={this.state.id}>
// 	      <Link
// 		key={this.state.id}
// 		to={{pathname:`/notes/${this.state.id}/edit`,
// 		state:{note: this.state.note}}}>
// 		Edit
// 	      </Link>
// 	      <button onClick={this.toggleModal}>Delete</button>
//               <Modal
// 		show={this.state.isOpen}
// 		onApprove={this.approveModal}
// 		onClose={this.toggleModal}
// 		>
// 		What you gonna Do?
// 	      </Modal>
// 	      <h2>{this.state.title}</h2>
// 	      <p>{this.state.text}</p>
// 	    </div>
// 	);
//     }
// }

const Expand = props => {
    console.log(props);

    // toggleModal = () => {
    // 	console.log('clicked!');
    // 	this.setState({
    // 	    isOpen: !this.state.isOpen
    // 	});
    // };
    
    return (
        <div className="oneNote" key={props.id}>
	  <Link
	    key={props.location.state.note.id}
	    to={{pathname:`/notes/${props.location.state.note.id}/edit`,
	    state:{note: props.location.state.note}}}>
	    Edit
	  </Link>
	  <Link
	    key={props.location.state.note.id}
	    to={{pathname:`/notes/${props.location.state.note.id}/delete`,
	    state:{note: props.location.state.note}}}>
	    Delete
	  </Link>
	  <h2>{props.location.state.note.title}</h2>
	  <p>{props.location.state.note.text}</p>
	</div>
    );
};

//<Link key={note.id} to={{pathname:`/notes/${note.id}/edit`, state:{note}}}>Edit</Link>
//<Link to={`${this.context.location.pathname}/picture/`}>Edit</Link>

// Expand.defaultProps = {
//     id: 0,
//     title: '',
//     text: ''
// };

export default Expand;


