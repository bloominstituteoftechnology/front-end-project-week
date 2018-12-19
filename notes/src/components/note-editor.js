

//== NoteEditor ================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ActionBar from './action-bar.js';
import {withRouter} from 'react-router-dom';


//== Component =================================================================

class NoteEditor extends React.Component {

    //-- Lifecycle -----------------------------------
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
            body: '',
            id: '',
        }    
    }
    componentDidMount() {
        let focusId = Number(this.props.match.params.id);
        let focusNote = this.props.notes.find(note => note.id === focusId);
        console.log(focusId, focusNote, this.props.notes);
        if(!focusNote){
            this.props.history.push('/');
            return;
        }
        let focusTitle = focusNote? focusNote.title    : '';
        let focusBody  = focusNote? focusNote.body : '';
        this.setState({
            title: focusTitle,
            body: focusBody,
            id: focusId,
        });
    }

    //-- Rendering -----------------------------------
    render() {
        return (
            <React.Fragment>
                <ActionBar />
                <h2>Edit Note:</h2>
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
                    <button className="button">Update</button>
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
            body: '',
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
