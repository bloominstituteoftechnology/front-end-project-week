import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'mdbreact';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    margin-left: 18%;

`;

export default class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            modal14: false,
        };
    }
    

    componentDidMount() {
        const id = this.props.match.params.id;

        this.fetchNote(id);
    };

    fetchNote = id => {
        const note = this.props.notes.map(note => note).filter(note => note.id === parseInt(id, 10));
        this.setState({ note: note[0] })
    };

    toggle = e => {
        e.preventDefault();
        this.setState({modal14: !this.state.modal14});
    }

    removeNote = e => {
        this.props.removeNote(e, this.state.note.id);
    }

    render() {
        if (!this.state.note) {
            return <div>No Note Data Found...</div>
        }

        return (
            <Wrapper>
                <NavLink to="/create-note" onClick={event => this.props.updateNote(event, this.state.note.id)}>Edit</NavLink>
                <NavLink to="/" onClick={this.toggle}>Delete</NavLink>
                <h1>{this.state.note.title}</h1>
                <p>{this.state.note.textBody}</p>

                <Modal isOpen={this.state.modal14} toggle={this.toggle} centered>
                <ModalHeader toggle={this.toggle}>Delete Note</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this note?
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-elegant' onClick={this.toggle}>Cancel</Button>
                    <Button className='btn btn-elegant' onClick={event => this.removeNote(event)}>Delete</Button>
                </ModalFooter>
                </Modal>
            </Wrapper>
        );
    };

};