import React, { Component } from 'react'
import { connect } from 'react-redux';

import { notesCreate, notesEdit } from '../redux/actions';

import NotesForm from '../components/NotesForm';

import NotesMenuView from './NotesMenuView';
import NoteAuth from '../components/NoteAuth';

class NotesFormView extends Component {
    state = {
        note: {
            title: "",
            textBody: "",
            tags: ""
        },
        notes_editing: false
    }
    componentDidMount() {
        if (this.props.note_to_be_updated) {
            this.setState({ notes_editing: true, note: this.props.note_to_be_updated });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.note_to_be_updated !== prevProps.note_to_be_updated) {
            this.setState({
                note: {
                    title: "",
                    textBody: "",
                    tags: ""
                },
                notes_editing: false
            });
        }
    }

    handleChange = event => {
        // if (event.target.name === "tags") {
        //     const tags = event.target.value.split(", ");
        //     this.setState({
        //         note: {
        //             ...this.state.note,
        //             tags,
        //         }
        //     });
        // } else {
        //     this.setState({
        //         note: {
        //             ...this.state.note,
        //             [event.target.name]: event.target.value
        //         }
        //     });
        // }
        this.setState({
            note: {
                ...this.state.note,
                [event.target.name]: event.target.value
            }
        });
    }

    handleCreate = (event) => {
        event.preventDefault();
        this.props.notesCreate(this.state.note);
        this.props.history.push("/notes");
    }

    handleEdit = () => {
        this.props.notesEdit(this.state.note);
        this.props.history.push("/notes");
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

  render() {
    if (this.isAuthenticated()) {
        return (
            <div>
          <NotesMenuView />
          <NotesForm {...this.props} 
            note={this.state.note}
            notes_editing={this.state.notes_editing}
            handleChange={this.handleChange}
            handleCreate={this.handleCreate}
            handleEdit={this.handleEdit}
          />
          </div>
        );
    } else {
        return (
            <NoteAuth />
        );
    }
  }
}

const mapStateToProps = state => ({
    note_to_be_updated: state.notesReducer.note_to_be_updated,
});

export default connect(mapStateToProps, { notesCreate, notesEdit })(NotesFormView);