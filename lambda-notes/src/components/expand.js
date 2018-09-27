import React, { Component } from 'react';
// import './note.css';
import Note from './note.js';
import Modal from './delete.js';
// import './expand.css';
import styled from 'styled-components';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const P = styled.p`
    left: 150px;
    top: 150px;
`;

const Div = styled.div`
    background: white;
    width: 250px;
    margin: 100px auto 0 auto;
    padding: 10px;
    top: 150px;
`;

const Section = styled.section`
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    margin: auto;
`;

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

class Expand extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    myNotes: []
	};
    }
    
    openModal = () => {
    	console.log('clicked!');
	document.getElementById("modal").style.display = "block";
	document.getElementById("modal").style.backgroundColor = 'rgba(0,0,3,0.4)';
    };

    closeModal = () => {
	document.getElementById("modal").style.display = "none";
    };

    deleteNote = e => {
	e.preventDefault();
	console.log(this.props.match.params.id);
	axios
	    .delete(`http://localhost:3333/notes/${this.props.match.params.id}`)
	    .then(res => {
		this.setState({ myNote2: res.data });
	    })
	    .catch(err => {
		console.log(err);
	    });
	console.log('delete clicked');
	window.location.reload();
    };
    
    render() {
	return (
            <div id='mydiv' className="oneNote" key={this.props.id}>
	      <Link
		key={this.props.location.state.note.id}
		to={{pathname:`/notes/${this.props.location.state.note.id}/edit`,
		state:{note: this.props.location.state.note}}}>
		Edit
	      </Link>
              <button onClick={this.openModal}>Delete</button>
              <Section id="modal">
		<Div>
		  <P>Do you want to delete this note?</P>
		  <button  onClick={this.deleteNote}>Delete</button>
		  <button onClick={this.closeModal}>No</button>
		</Div>
              </Section>
	      <h2>{this.props.location.state.note.title}</h2>
	      <p>{this.props.location.state.note.text}</p>
	    </div>
	);
    }
};

//     <Link
// key={this.props.location.state.note.id}
// to={{pathname:`/notes/${this.props.location.state.note.id}/delete`,
//      state:{note: this.props.location.state.note}}}>
//     Delete
// </Link>

//<Link key={note.id} to={{pathname:`/notes/${note.id}/edit`, state:{note}}}>Edit</Link>
//<Link to={`${this.context.location.pathname}/picture/`}>Edit</Link>

// Expand.defaultProps = {
//     id: 0,
//     title: '',
//     text: ''
// };

export default Expand;


