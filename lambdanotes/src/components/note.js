import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import './note.css'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    handleDelete = () => {
        this.props.delete(this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
    return (
        <div className="a-note">
            <div className="a-note-nav">
                <Link className="a-note-item" to={{pathname: `/notes/${this.props.location.state.currentNote.id}/EditNote`, state: { default: this.props.location.state.currentNote }}}>edit</Link>
                <div className="a-note-item">
                    <a className="a-note-item" onClick={this.toggle}>delete</a>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                    <ModalFooter>
                        <Button className="delete-button" onClick={this.handleDelete}>Delete</Button>
                        <Button className="Button" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </div>
            </div>


            




            <h4 className="note-title">{this.props.location.state.currentNote.title}</h4>
            <div className="note-content">
            <h5>{ this.props.location.state.currentNote.text } </h5>
            </div>
        </div>
    );
};
}

export default Note;