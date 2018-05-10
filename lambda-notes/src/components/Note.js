import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';

import { getNote, deleteNote } from '../actions'; 

import '../css/App.css';
import '../css/Note.css';


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
                                        <Card style={{display: 'flex'}}>
                                            <CardBody style={{border:'1px solid black'}} >
                                                <CardTitle style={{display: 'flex', justifyContent:'center'}}>{this.props.note.title}</CardTitle>
                                                <CardText style={{display: 'flex', justifyContent:'center'}}>{this.props.note.body}</CardText>
                                <Link to={`/update/${this.props.note.id}`}><Button color='info' className='button'> Update Note </Button></Link>
                                <Button color='danger' onClick={this.toggle}>Delete</Button>
                                            </CardBody>
                                        </Card>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Confirm Delete</ModalHeader>
                                    <ModalBody>
                                        Are you sure you want to delete?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Link to={`/`} className='button' onClick={ () => this.toggleDelete()}><Button color='danger'>Yes</Button></Link>
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
