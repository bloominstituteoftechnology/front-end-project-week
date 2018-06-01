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
                body: '',
            }

        }
    }

    handleSave = () => {
        // console.log('My Note is: ', this.state.note);
        let craftedNote = { ...this.state.note };
        craftedNote['_id'] = Date.now() + craftedNote.title;
        craftedNote.createdAt = Date.now();
        console.log('My Crafted Note is: ', craftedNote);
        this.props.createNote(craftedNote);
        this.props.history.push('/');
    }

    handleChange = (e) => {
        let temp = { ...this.state.note }
        temp[e.target.name] = e.target.value;
        this.setState({ note: temp });
    }

    render() {
        return (
            <div className='noteView_container'>
                <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        Create New Note:
                    </h3>
                </div>
                <div className='createNote_form'>
                    <input
                        type='text'
                        className='createNote_title'
                        placeholder='Note Title'
                        name='title'
                        value={this.state.note.title}
                        onChange={this.handleChange}
                    />
                    <textarea
                        className='createNote_body'
                        placeholder='Note Content'
                        name='body'
                        value={this.state.note.body}
                        onChange={this.handleChange}
                        rows="20"
                    />
                    <div
                        className='nav_button createNote_button'
                        onClick={this.handleSave}
                    >
                        Save
                        </div>   
                </div>
            </div>
        );
    }
}

export default connect(null, {createNote})(CreateNote);