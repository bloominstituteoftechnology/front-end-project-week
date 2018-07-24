import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Sidebar from './Sidebar';
import { addNote, deleteNote } from '../Actions/index';
import "../css/CreateNote.css";

class CreateNote extends Component {
    state = {
        type: 'Create New Note', //Edit Note:
        title: '',
        content: '',
        id: '',
        button: 'Save' //Update
    }

    updateInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
  
    createNewNote = () => {
        const newNote = {
            title: this.state.title,
            content: this.state.content
        }
        axios
            .post('https://lambda-notes-back-end.herokuapp.com/notes/create', newNote)
            .then(notes => {
                this.setState(notes)
                console.log(notes)
            })
        this.props.addNote(newNote);
        this.setState({ title: '', content: ''});
    }

    render() {
        return (
            <Container className='container'>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <div className='newNote'>
                            <h4 className='createNoteHeading'>{this.state.type}</h4>

                            <input type='text' name='title' placeholder='Note Title (required)' value={ this.state.title } onChange={ this.updateInput } />

                            <textarea name='content' rows='15' cols='90' placeholder='Note Content (required)' value={ this.state.content } onChange={ this.updateInput } />

                            <Link to={'/notes'}>
                            <button className='submit' onClick={ this.createNewNote }>{ this.state.button }</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state
    };
}
export default connect(mapStateToProps, { addNote, deleteNote })(CreateNote);

