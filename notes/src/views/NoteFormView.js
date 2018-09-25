import React from 'react';
import { connect } from 'react-redux';

import { addNewNote } from '../actions';

import NoteForm from '../components/NoteForm';

class NoteFormView extends React.Component {
    state = {
        note: {
            title: '',
            textBody: '',
            _id: ''
        },
        isUpdating: false,
    };

    componentDidMount() {
        if (this.props.noteToUpdate) {
            this.setState({ isUpdating: true, note: this.props.noteToUpdate});

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

    handleAddNewNote = event => {
        event.preventDefault();
        console.log('firing');
        this.props.addNewNote(this.state.note);
        this.props.history.push('/notes');
    }

    handleUpdateNote = () => {
        this.props.updateNote(this.state.note);
        this.props.history.push('/notes');
    }

    render() {
        return (
            <NoteForm
            {...this.props}
            note={this.state.note}
            handleAddNewNote={this.handleAddNewNote}
            handleChange={this.handleChange}
            handleUpdateNote={this.handleUpdateNote}
            isUpdating={this.state.isUpdating}
            />
        );
    }
}

const mapStateToProps = state => ({
    noteToUpdate: state.noteToUpdate,
});

export default connect(mapStateToProps, { addNewNote })(NoteFormView);