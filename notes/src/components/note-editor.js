

//== NoteEditor ================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ActionBar from './action-bar.js';
import {withRouter} from 'react-router-dom'


//== Component =================================================================

class NoteEditor extends React.Component {

    //-- Lifecycle -----------------------------------
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
            textBody: '',
            id: '',
        }    
    }

    componentDidMount() {
        let focusId = this.props.match.params.id;
        let focusNote = this.props.notes.find(note => note._id === focusId);
        // TO DO: Handle bad note ids (note not found)
        this.setState({
            title: focusNote.title,
            textBody: focusNote.textBody,
            id: focusNote._id,
        });
    }

    //-- Rendering -----------------------------------
    render() {
        return (
            <React.Fragment>
                <ActionBar />
                <h2>Edit Note:</h2>
                <form className="note-creator" onSubmit={this.handleSubmit}>
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
                        value={this.state.textBody}
                        name="textBody"
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
        let noteData = Object.assign({}, this.state);
        this.clearState();
        // Send server updated note info
        this.props.updateNote(noteData);   
        /* else{ // Update Notes
            this.props.updateNote(NoteData);
        }*/
        // Redirect to view updated note
        this.props.history.push(`/note/${noteData.id}`);
    }

    //-- Utility Methods -----------------------------
    clearState() {
        this.setState({
            title: '',
            textBody: '',
            id: '',
        });
    }
}
  
//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,
        notes: state.notes,
    };
}
NoteEditor = connect(mapStateToProps, {
    updateNote: actions.updateNote,
    //updateNote: actions.updateNote,
    notReady: actions.notReady,
})(NoteEditor);

//-- Router Coupling -----------------------------
NoteEditor = withRouter(NoteEditor);

//-- Exporting -----------------------------------
export default NoteEditor;
