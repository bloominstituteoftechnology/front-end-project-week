import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewNote, updateNote } from '../store/actions';

import NoteCreateForm from '../components/NoteComponents/NoteCreateForm';

class NoteFormView extends Component {
    state = {
        note: {
            _id: '',
            tags: [],
            title: '',
            textBody: '',
        },
        isUpdating: false,
    };

    componentDidMount() {
        if (this.props.isUpdating) {
            this.setState({ isUpdating: true, note: this.props.noteToUpdate[0] });
        };
    };

    handleChange = e => {
        if (e.target.name === 'tags') {
            const tags = e.target.value.split(',');
            this.setState({
                note: {
                    ...this.state.note,
                    tags,
                }
            });
        } else {
            this.setState({
                note: {
                    ...this.state.note,
                    [e.target.name]: e.target.value,
                }
            });
        }
    }

    handleAddNewNote = e => {
        e.preventDefault();
        this.props.addNewNote(this.state.note);
        this.props.history.push('/');
    };

    handleUpdateNote = note => {
        this.setState({isUpdating: false}, () => {
            this.props.updateNote(this.state.note);
            this.props.history.push('/');
        });
        
    };

    render() {
        return (
            <NoteCreateForm
                {...this.props}
                note={this.state.note}
                handleAddNewNote={this.handleAddNewNote}
                handleChange={this.handleChange}
                handleChange2={this.handleChange2}
                handleUpdateNote={this.handleUpdateNote}
                isUpdating={this.state.isUpdating}
            />
        );
    }
};

const mapStateToProps = state => ({
    noteToUpdate: state.noteToUpdate,
    isUpdating: state.isUpdating,
});

export default connect(mapStateToProps, { addNewNote, updateNote })(NoteFormView);