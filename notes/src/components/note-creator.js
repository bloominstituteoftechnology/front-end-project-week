

//== NoteCreator ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


//== Component =================================================================

class NoteCreator extends React.Component {

    //-- Lifecycle -----------------------------------
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
            textBody: '',
        }    
    }

    //-- Rendering -----------------------------------
    render() {
        console.log('asdf')
        return (
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
        // Send to server as new note
        if(this.props.focus === null){
            this.props.addNote(noteData);   
        }/* else{ // Update Notes
            Data.id = this.props.focus;
            this.props.updateNote(NoteData);
        }*/
    }

    //-- Utility Methods -----------------------------
    clearState() {
        this.setState({
            title: '',
            textBody: '',
        });
    }
}
  
//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,
        focus: state.focus,
    };
}
NoteCreator = connect(mapStateToProps, {
    addNote: actions.addNote,
    //updateNote: actions.updateNote,
    notReady: actions.notReady,
})(NoteCreator);

//-- Exporting -----------------------------------
export default NoteCreator;
