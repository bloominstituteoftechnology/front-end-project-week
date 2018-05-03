import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import { addNote } from '../Actions/index';
import "../Styles/CreateNote.css";

class CreateNote extends Component {
   
        state = {
            title: '',
            content: '',
            // id: '',
            // edited: false,
            // deleted: false
        }
    
    componentDidMount() {
        // this.props.getNotes();
    }
    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('UPDATE', this.state)
    }
    createNewNote = () => {
        const newNote = { 
            title: this.state.title,
            content: this.state.content,
            id: this.props.notes.length,
            edited: false,
            deleted: false
        };
        console.log('NEWNOTE', newNote);
        this.props.addNote(newNote);
        this.setState({ title: '', content: ''})
    }
    render() {
        return (
            <div className='create'>
            <Sidebar />
                <div className='newNote'>
                <h4>Create New Note:</h4>

                <input type='text' name='title' placeholder='Note Title' value={this.state.title} onChange={this.updateInput}/>

                <textarea name='content' rows='20' cols='90' placeholder='Note Content' value={this.state.content} onChange={this.updateInput}/>

                <button className='submit' onClick={this.createNewNote}>save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state
        // id: state.id,
        // deleted: state.deleted,
        // edited: state.edited
    };
}
export default connect(mapStateToProps, { addNote })(CreateNote);