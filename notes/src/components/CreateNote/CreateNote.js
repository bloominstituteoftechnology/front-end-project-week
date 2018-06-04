import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions';
import './index.css';

class CreateNote extends Component { 
    constructor() {
        super();
        this.state = {
            note: {
                title: '',
                body: ''
            }
        }
    }

handleSave = () => {
    let makeNote = { ...this.state.note };
    makeNote['_id'] = Date.now() + makeNote.title;
    makeNote.createdAt = Date.now();
    console.log('click', makeNote)
    this.props.createNote(makeNote);
    this.props.history.push('/');
}

handleChange = e => {
    let copyNote = { ...this.state.note };
    copyNote[e.target.name] = e.target.value;
    this.setState({ note: copyNote });
}
    render() {
        return (
            <div>
                <div className='content-header'>
                    <h2>Create New Note:</h2>
                </div>
                <div className='form'>
                <input className='title-input'
                    type='text'
                    name='title'
                    placeholder='Note Title'
                    value={this.state.note.title}
                    onChange={this.handleChange}
                />
                <textarea className='content-input'
                    type='text'
                    name='body'
                    placeholder='Note Content'
                    value={this.state.note.body}
                    onChange={this.handleChange}
                />
                <button className='btn form-btn'
                    onClick={this.handleSave}
                    >
                    Save
                </button>
                </div>
            </div>
        );
    }
}

export default connect(null, { createNote })(CreateNote);