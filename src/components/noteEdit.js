import React, { Component } from 'react';
import "../css/note.css"
import { viewNote } from '../actions';
import { updateNote } from '../actions';
import { connect } from 'react-redux';


class NoteEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            tags: '',
            title: '',
            textBody: '',
            id: '',
            select: null,
        };
    }

    componentDidMount() {
        this.props.viewNote(this.props.id)
        const currentTitle = this.props.noteSelected.title;
        const currentTextBody = this.props.noteSelected.textBody;

        this.setState({ title: currentTitle, textBody: currentTextBody });
        console.log("the state:", this.state)
    }

    noteUpdate = (e) => {
        e.preventDefault();
        const newRec = {
            tags: this.state.tags,
            title: this.state.title,
            textBody: this.state.textBody,
        }
        this.props.updateNote(newRec, this.props.id);
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <form className="note-edit-form" >
                <header className="note-create-header">Edit Note:</header>
                <input
                    type="text"
                    className="note-title-input"
                    placeholder={this.props.noteSelected.title}
                    value={this.props.value}
                    onChange={this.changeHandler}
                    name="title" />
                <textarea
                    type="text"
                    placeholder={this.props.noteSelected.textBody}
                    className="note-textarea"
                    value={this.props.value}
                    onChange={this.changeHandler}
                    name="textBody" />
                <button
                    className="update-button"
                    onClick={this.noteUpdate}>
                    Update
            </button>
            </form>
        );
    };
}
const mapStateToProps = state => {
    // const { singleNoteReducer } = state;
    return {
        error: state.notesReducer.error,
        noteSelected: state.singleNoteReducer.noteSelected
    };
};

export default connect(mapStateToProps, {
    viewNote,
    updateNote,
})(NoteEdit);
