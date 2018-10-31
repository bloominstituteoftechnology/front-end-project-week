

//== NoteList ==================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Note from './note.js';
import ActionBar from './action-bar.js';


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
        if(!this.props.ready){
            loadNotifier = (<div className="load-notifier">(Loading)</div>);
            classText += ' note-list_loading';
        }
        return (
            <React.Fragment>
                <ActionBar />
                <h2>Your Notes:</h2>
                <div className={classText}>
                    {loadNotifier}
                    {!this.props.ready? null : this.props.notes.map(note => (
                        <Note
                            key={note._id}
                            note={note}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }

    //-- Interaction ---------------------------------
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,
        notes: state.notes,
        error: state.error,
    };
}
NoteList = connect(mapStateToProps, {
    getNotes: actions.getNotes,
})(NoteList);

//-- Exporting -----------------------------------
export default NoteList;
