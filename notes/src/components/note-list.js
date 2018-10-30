

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
                        key={note.name}
                        note={note}
                        onClick={() => this.props.onFocus(note.id)}
                    />
                ))}
            </div>
        );
    }

    //-- Interaction ---------------------------------
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    console.log(state)
    return {
        notes: state.notes,
        error: state.error,
    };
}
NoteList = connect(mapStateToProps, {
    getNotes: actions.getNotes,
    //onFocus: actions.focusNote,
})(NoteList);

//-- Exporting -----------------------------------
export default NoteList;
