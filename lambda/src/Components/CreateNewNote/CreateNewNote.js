import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { post_note } from '../../Actions/index.js';
import { Form, Input } from 'reactstrap';
import './CreateNewNote.css';

class CreateNewNote extends Component {
    state = {
        title: '',
        content: ''
    };

    render() {
        return (
            <div className='newNote'>
                <h2 className='note'>Add New Note</h2>
                <Form method='post' className='form'>
                    <div>
                        <Input placeholder='Note Title'
                            type='text'
                            name='title'
                            value={this.state.title}
                            onChange={this.handleNewNote}
                            className='form'
                        />
                    </div>
                    <div>
                        <Input placeholder='Note Content'
                            type='textarea'
                            name='content'
                            data-provide="markdown"
                            value={this.state.content}
                            onChange={this.handleNewNote}
                            className='form'
                            style={{height: 390}}
                        />
                    </div>
                    <Link to='/' onClick={this.submitNewNote} className='link'>Save</Link>
                </Form>
            </div>
        )
    }

    handleNewNote = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    submitNewNote = event => {
        const { title, content } = this.state;
        const note = { title, content };
        this.props.post_note(note);
        this.setState({
            title: '',
            content: ''
        });
        setTimeout(() => { window.location.reload(); }, 0);
    }
}

export default connect(null, { post_note })(CreateNewNote);