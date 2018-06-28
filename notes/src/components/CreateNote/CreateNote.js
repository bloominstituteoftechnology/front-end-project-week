import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions';
import { postNote } from '../../actions';
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
        let createdNote = { ...this.state.note };
        createdNote['_id'] = Date.now() + createdNote.title;
        createdNote.createdAt = Date.now();
        this.props.createNote(createdNote);
        this.props.history.push('/');
        

    }

    handleChange = (e) => {
        let temp = { ...this.state.note }
        temp[e.target.name] = e.target.value;
        this.setState({ note: temp });
    }

    render() {
        return (
        <div className="noteView_container">
            <div className="noteView_topContent">
            <h3 className="content_header">
                Create New Note:  
            </h3>
            </div>
            <div className="createNote_form">
                <input type="text"
                    className="createNote_title"
                    placeholder="Note Title"
                    name='title'
                    value={this.state.note.title}
                    onChange={this.handleChange}
                    />
                <textarea 
                    className="createNote_body"
                    placeholder="Note Content"
                    name='body'
                    value={this.state.note.body}
                    onChange={this.handleChange}
                    rows="25"
                    />
             
                <div 
                className="nav_button createNote_button"
                onClick={this.handleSave}
                >Save</div>
                
            </div>       
        </div> 
        );       
    }};


export default connect(null, {createNote})(CreateNote);

