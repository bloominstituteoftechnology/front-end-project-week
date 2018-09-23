import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/index';
import './index.css';

class CreateNote extends Component {
    constructor(){
        super();
        this.state = {
            note: {
                _id: 'jakfleigjiosigeo',
                title: '',
                textBody: '',
                createdAt: 123456
            }
        }
    }


    handleSave = () => {
        this.props.saveNote(this.state.note);
    }

    handleChange =(event) => {
        let temp = { note: {[event.target.name]: event.target.value} }
        let newState = Object.assign({}, this.state, temp)
        this.setState(newState)
    }

    render() {
        return (
            <div className='create_view'>
                <form className="create_form">
                    <h3 className="create_header">Create New Note: </h3>
                    <br />
                    <input 
                        className="create_title" 
                        type="text" 
                        placeholder="Note Title"
                        value={this.state.note.title}
                        onChange={this.handleChange}
                        name="title"
                    />
                    <br /><br />
                    <textarea 
                        className="create_content" 
                        rows="20" 
                        placeholder="Note Content"
                        value={this.state.note.textBody}
                        onChange={this.handleChange}
                        name="textBody"
                    />
                        <br />
                    <button 
                    className="create_button"
                    onClick={this.handleSave}>Save</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createNote})(CreateNote);