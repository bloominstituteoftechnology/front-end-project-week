import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes, deleteNote, setUpdateNote } from '../store/actions';
import NotePage from '../components/NoteComponents/NotePage';

class NoteView extends Component {
    state = {
        modal14: false,
    }
    componentDidMount() {
        if (this.props.notes.length === 0) {
            this.props.getNotes();
        };
    };

    componentDidUpdate() {
        this.props.getNotes();
    }

    handleDeleteNote = id => {
        console.log('DELETE', id)
        this.props.deleteNote(id);
    };

    goToForm = (e, id) => {
        e.preventDefault();
        this.props.setUpdateNote(id);
        this.props.history.push('/form');
    };

    toggle = e => {
        e.preventDefault();
        console.log('TOGGLE');
        this.setState({modal14: !this.state.modal14});
    }

    render() {
        return (
            <NotePage
                {...this.props}
                notes={this.props.notes}
                isLoading={this.props.isLoading}
                handleDeleteNote={this.handleDeleteNote}
                goToForm={this.goToForm}
                toggle={this.toggle}
                modal14={this.state.modal14}
            />
        );
    };
};

const mapStateToProps = state => ({
    notes: state.notes,
    isLoading: state.isLoading,
});

export default connect(mapStateToProps, { getNotes, deleteNote, setUpdateNote })(NoteView);