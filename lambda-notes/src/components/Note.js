import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { getNote, deleteNote } from '../actions'; 

import '../css/App.css';


class Note extends Component {
    constructor() {
        super()
        this.state = {
            modal: false
        }
    }

    render() {
        return (
            <div>
                        {!this.props.note ?
                            <h2> loading notes</h2>: null}
                                <h2> {this.props.note.title} </h2>
                                <p> {this.props.note.body} </p>
                                <Button color='info'><Link to={`/notes/update/${this.props.note.id}`} className='link'> Update Note </Link></Button>
                                <Button color='danger' onClick={this.toggle}>Delete</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Confirm Delete</ModalHeader>
                                    <ModalBody>
                                        Are you sure you want to delete?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color='danger' type='submit' onClick={ () => this.toggleDelete()}><Link to={`/`} className='link'>Yes</Link></Button>
                                        <Button color='success' onClick={this.toggle}>No</Button>
                                    </ModalFooter>
                                </Modal>
                </div>
            );
        }   

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleDelete = () => {
        this.toggle()
        this.delete()
    }
        
    delete = () => {
        const id = this.props.match.params.id
        this.props.deleteNote(id)
    }


    componentDidMount() {
        const id = (this.props.match.params.id)
        this.props.getNote(id);
    }
}
    const mapStateToProps = (state) => {
        return {
            note:state.note,
        }
    }
    
  export default connect(mapStateToProps, { getNote, deleteNote })(Note);
