

//== NoteCreator ===============================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {withRouter} from 'react-router-dom';


//== Component =================================================================

class NoteCreator extends React.Component {

    //-- Lifecycle -----------------------------------

    //-- Rendering -----------------------------------
    render() {
        const id = this.props.match.params.id;
        let focusNote = this.props.notes.find(note => note._id === id);
        // TO DO: what happens if the note no longer exists? (currently: crash)
        return (
            <React.Fragment>
                <h2 className="view-title">{focusNote.title}</h2>
                <p>{focusNote.textBody}</p>
            </React.Fragment>
        );
    }

    //-- Interaction ---------------------------------

    //-- Utility Methods -----------------------------
}
  
//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,
        notes: state.notes,
    };
}
NoteCreator = withRouter(connect(mapStateToProps, {
    //addNote: actions.addNote,
    //updateNote: actions.updateNote,
    //notReady: actions.notReady,
})(NoteCreator));

//-- Exporting -----------------------------------
export default NoteCreator;
