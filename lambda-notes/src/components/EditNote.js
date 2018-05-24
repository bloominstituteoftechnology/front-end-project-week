import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote, removeNote } from '../actions';

class EditNote extends Component {
    state = {
        title: `${this.matchedNote.title}`,
        body: `${this.matchedNote.body}`,
        id: this.matchedNote.id
    }

    matchedNote = this.props.notes.filter(note => {
        return note.id == this.props.match.params.id
    })[0];

    handleEditNote = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
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
                        defaultValue={``} 
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