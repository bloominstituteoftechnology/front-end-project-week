

//== NoteList ==================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Note from './note.js';


//== Component =================================================================

class NoteList extends React.Component {

    //-- Lifecycle -----------------------------------
    componentDidMount() {
        this.props.getNotes();
    }

    //-- Rendering -----------------------------------
    render() {
        let loadNotifier;
        let classText = 'note-list';
        if(this.props.loading){
            loadNotifier = (<div className="load-notifier">(Loading)</div>);
            classText += ' note-list_loading';
        }
        return (
            <div className={classText}>
                {loadNotifier}
                {this.props.notes.map(note => (
                    <Note
                        key={note._id}
                        note={note}
                        onClick={this.focusHandler}
                    />
                ))}
            </div>
        );
    }

    //-- Interaction ---------------------------------
    focusHandler = eventClick => {
        let focusId = eventClick.currentTarget.dataset.id;
        this.props.focusNote(focusId);
    }
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        notes: state.notes,
        error: state.error,
    };
}
NoteList = connect(mapStateToProps, {
    getNotes: actions.getNotes,
    focusNote: actions.focusNote,
})(NoteList);

//-- Exporting -----------------------------------
export default NoteList;
