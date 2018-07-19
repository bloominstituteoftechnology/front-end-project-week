import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditNote from './EditNote';
// import Modal from './Modal';
import '../styles/ViewNote.css';
import Sidebar from './Sidebar';


class ViewNote extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        note: null
        // modal: false,
    }
}
 

    // toggleModal = () => {
    //     this.setState({ modal: this.state.modal });
    // }

    // handleDeleteNote = () => {
    //     this.toggleModal();
    //     this.props.deleteNote(this.props.singleNote.title);
    //     this.props.history.push('/');
    // }

    render() {
    return (
            <div>
                <Sidebar />
                <Link to={{pathname: `/editNote/${this.props.location.state.id}`, state: {title: this.props.location.state.title, body: this.props.location.state.body}}}>edit</Link>
                {/* <Link>delete</Link> */}
            <div className="Viewnote">
            <h3>{this.props.location.state.title}</h3>
            <p>{this.props.location.state.body}</p>    
            </div>
            </div>
        )
    }
}


export default ViewNote;