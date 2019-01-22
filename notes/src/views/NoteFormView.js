import React from 'react';
import { connect } from 'react-redux';

import { addNewNote, setUpdateNote, updateNote } from '../actions';

import NoteForm from '../components/NoteForm';

class NoteFormView extends React.Component {
    state = {
        note: {
            title: '',
            textBody: '',
            _id: '',
            tags: [],
        },
        updatingNote: false,
    };

    componentDidMount() {
        if (this.props.noteToUpdate) {
            this.setState({ updatingNote: true, note: this.props.noteToUpdate});

        }
    }

    handleChange = event => {
        this.setState({
            note: {
                ...this.state.note,
                [event.target.name]: event.target.value,
            }
        });
    }

    handleTagsChange = event => {
        this.setState({
            note: {
                tags: [event.target.value.split(',')]
            }
        })
    }

    handleAddNewNote = event => {
        event.preventDefault();
        console.log('firing');
        this.props.addNewNote(this.state.note);
        this.props.history.push('/');
    }

    handleUpdateNote = () => {
        this.props.updateNote(this.state.note);
        this.props.history.push('/');
    }

    render() {
        return (
            <NoteForm
            {...this.props}
            note={this.state.note}
            handleAddNewNote={this.handleAddNewNote}
            handleChange={this.handleChange}
            handleTagsChange={this.handleTagsChange}
            handleUpdateNote={this.handleUpdateNote}
            updatingNote={this.state.updatingNote}
            />
        );
    }
}

const mapStateToProps = state => ({
    noteToUpdate: state.noteToUpdate,
});

export default connect(mapStateToProps, { addNewNote, updateNote })(NoteFormView);