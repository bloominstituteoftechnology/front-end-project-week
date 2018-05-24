import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote, removeNote } from '../actions';

class EditNote extends Component {
    state = {
        title: '',
        body: '',
        notes: []
    }

    matchedNote = this.props.notes.filter(note => {
        return note.id == this.props.match.params.id
    })[0];

    handleEditNote = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleRemoveNote = (event, id) => {
        this.props.removeNote(this.matchedNote)
        this.props.history.push('/');
    };

    addNote = (event) => {
        let noteObj = { 
            title: this.state.title, 
            body: this.state.body, 
            id: this.state.id }
        this.props.addNote(noteObj);
        this.setState({ title: '', body: '' });
        this.props.history.push('/');
    }
    
    editNote = (event) => {
        event.preventDefault();
        this.handleRemoveNote();
        this.addNote();
        
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        defaultValue={`${this.matchedNote.title}`} 
                        name="title"
                        value={this.state.title}
                        onChange={this.handleEditNote}/>
                    <textarea 
                        defaultValue={`${this.matchedNote.body}`}
                        name="body"
                        value={this.state.body}
                        onChange={this.handleEditNote}/>
                    <button onClick={this.editNote}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { addNote, removeNote })(EditNote);