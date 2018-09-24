import React from 'react';
import { connect } from 'react-redux';

import { addNote } from '../store/actions';
import NotesForm from '../components/NotesForm/NotesForm';

class NotesFormView extends React.Component {
    state={
        note: {
            title: '',
            text: ''
        }
    };

    handleChange = event => {
        this.setState({
            note: {
                ...this.state.note,
                [event.target.name]: event.target.value
            }
        });
    }

    handleAddNewNote = event => {
        event.preventDefault();
        this.props.addNote(this.state.note);
        this.props.history.push('/notes');
    }

    render() {
        return (
            <NotesForm 
            {...this.props}
            note = {this.state.note}
            handleAddNewNote={this.handleAddNewNote}
            handleChange={this.handleChange}
            />
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { addNote })(NotesFormView);