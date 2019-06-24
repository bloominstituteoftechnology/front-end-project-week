import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditNote from './EditNote';
import Modal from './Modal';
import '../styles/ViewNote.css';
import Sidebar from './Sidebar';


class ViewNote extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        note: null,
        modal: false,
    }
}
 

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    deleteNote = e => {
        e.preventDefault();
        let notes = this.props.notes.slice();
        let id = this.props.id
        let index = notes.findIndex(function(n) {
            return n.id === id;
        });
        notes.splice(index, 1)
        this.setState({ delete: !this.state.delete })
    }

    handleDeleteNote = () => {
        this.toggleModal();
        this.props.deleteNote(this.props.title);
        this.props.history.push('/');
    }

render() {
    return (
        <div>
            <Sidebar />
            <Link to={{pathname: `/editNote/${this.props.location.state.id}`, state: {title: this.props.location.state.title, body: this.props.location.state.body, id: this.props.location.state.id, notes: this.props.location.state.notes}}}>edit</Link>
            <a onClick={this.toggleModal}>delete</a>
            {this.state.modal ?
             <Modal 
             toggleModal={this.toggleModal} 
             id={this.props.location.state.id} 
             notes={this.props.location.state.notes} 
             delete={this.props.delete}/> : null}
        <div className="Viewnote">
        <h3>{this.props.location.state.title}</h3>
        <p>{this.props.location.state.body}</p>    
        </div>
        </div>
        )
    }
}


export default ViewNote;