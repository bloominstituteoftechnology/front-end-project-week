

//== NoteView ==================================================================

//-- Dependencies --------------------------------
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {withRouter} from 'react-router-dom';
import ActionBar from './action-bar.js';


//== Component =================================================================

class NoteView extends React.Component {

    //-- Lifecycle -----------------------------------
    constructor() {
        super(...arguments);
        this.state = {
            confirmDelete: false,
        };
    }
    componentDidMount() {
        const id = Number(this.props.match.params.id);
        let focusNote = this.props.notes.find(note => note.id === id);
        if(!focusNote){
            console.log('no note', id, this.props.notes)
            this.props.history.push('/');
            return;
        }
        if(this.state.confirmDelete){
            this.state({confirmDelete: false})
        }
    }

    //-- Rendering -----------------------------------
    render() {
        const id = Number(this.props.match.params.id);
        let focusNote = this.props.notes.find(note => note.id === id);
        if(!focusNote){
            return null;
        }
        let editUrl = `/edit/${focusNote.id}`;
        // TO DO: what happens if the note no longer exists? (currently: crash)
        let deleteModal;
        if(this.state.confirmDelete){
            deleteModal = (<DeleteModal
                cancel={this.cancelModal}
                confirm={this.confirmDelete}
            />);
        }
        return (
            <React.Fragment>
                {deleteModal}
                <ActionBar edit={editUrl} delete={this.handleDelete} />
                <h2 className="view-title">{focusNote.title}</h2>
                <p>{focusNote.body}</p>
            </React.Fragment>
        );
    }

    //-- Interaction ---------------------------------
    handleDelete = eventClick => {
        eventClick.preventDefault();
        this.setState({confirmDelete: true});
    }
    cancelModal = eventClick => {
        eventClick.preventDefault();
        this.setState({confirmDelete: false});
    }
    confirmDelete = eventClick => {
        eventClick.preventDefault();
        this.setState({confirmDelete: false});
        const id = this.props.match.params.id;
        this.props.deleteNote(id);
        this.props.history.push('/');
    }

    //-- Utility Methods -----------------------------
}


//== Utility Components ========================================================

function DeleteModal(props) {
    return (
        <div className="modal-container">
            <div className="modal">
                <span>Are you sure you want to delete this?</span>
                <div className="modal-buttons">
                    <button
                        className="button button-danger"
                        onClick={props.confirm}
                        children="Delete"
                    />
                    <button
                        className="button"
                        onClick={props.cancel}
                        children="No"
                    />
                </div>
            </div>
        </div>
    );
}


//== Export, and Redux Preparation =============================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
    return {
        ready: !state.fetching,
        notes: state.notes,
    };
}
NoteView = withRouter(connect(mapStateToProps, {
    deleteNote: actions.deleteNote,
    //addNote: actions.addNote,
    //updateNote: actions.updateNote,
    //notReady: actions.notReady,
})(NoteView));

//-- Exporting -----------------------------------
export default NoteView;
