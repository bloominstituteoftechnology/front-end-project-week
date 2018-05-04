import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import { addNote } from '../Actions/index';
import "../Styles/CreateNote.css";
import ListView from './ListView';

class CreateNote extends Component {
    state = {
        title: '',
        content: '',

    }

    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createNewNote = () => {
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            id: this.props.notes.length,
            edited: false,
            deleted: false
        };
        this.props.addNote(newNote);
        this.setState({ title: '', content: '' })
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
                            <h4>Create New Note:</h4>

                            <input type='text' name='title' placeholder='Note Title' value={ this.state.title } onChange={ this.updateInput } />

                            <textarea name='content' rows='20' cols='90' placeholder='Note Content' value={ this.state.content } onChange={ this.updateInput } />

                            <Link to={'/'}>
                            <button className='submit' onClick={ this.createNewNote }>save</button>
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
export default connect(mapStateToProps, { addNote })(CreateNote);