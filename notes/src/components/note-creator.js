

//== NoteCreator ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ActionBar from './action-bar.js';
import {withRouter} from 'react-router-dom';


//== Component =================================================================

class NoteCreator extends React.Component {

    //-- Lifecycle -----------------------------------
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
            body : '',

        }    
    }

    //-- Rendering -----------------------------------
    render() {
        return (
            <React.Fragment>
                <ActionBar />
                <h2>Create New Note:</h2>
                <form className="note-editor" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Note Title"
                        value={this.state.title}
                        name="title"
                    />
                    <textarea
                        onChange={this.handleInputChange}
                        placeholder="Note Content"
                        value={this.state.body}
                        name="body"
                    />
                    <button className="button">Save</button>
                </form>
            </React.Fragment>
        );
    }

    //-- Interaction ---------------------------------
    handleInputChange = changeEvent => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value 
        });
    }
    handleSubmit = submitEvent => {
        // Prevent page refresh
        submitEvent.preventDefault();
        // Cancel if UI isn't ready
        if(!this.props.ready){
          this.props.notReady('You cannot add a note right now');
          return;
        }
        // Generate note data and clear state
        let noteData = {
            title: this.state.title   ,
            body : this.state.body,
        };
        this.clearState();
        // Prep redirect
        let callback = (noteId) => {
            this.props.history.push(`/note/${noteId}`);
        };
        // Send to server as new note
        this.props.addNote(noteData, callback);
        /* else{ // Update Notes
            this.props.updateNote(NoteData);
        }*/
        
    }

    //-- Utility Methods -----------------------------
    clearState() {
        this.setState({
            title: '',
            body: '',

        });
    }
}
  
//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,

    };
}
NoteCreator = connect(mapStateToProps, {
    addNote: actions.addNote,
    //updateNote: actions.updateNote,
    notReady: actions.notReady,
})(NoteCreator);

//-- Router Coupling -----------------------------
NoteCreator = withRouter(NoteCreator);

//-- Exporting -----------------------------------
export default NoteCreator;
