import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class NotesForm extends Component {
    state = {
        title: '',
        text: '',
    };



    handleTodoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodoHandler = e => {
        e.preventDefault();
		console.log(this.state);
		this.props.addNote(this.state);
    };

    render() {
        return (
            <form className="Column-Layout">
                <input
                    className="input"
                    value={this.state.title}
                    name="title"
                    type="text"
                    placeholder="Title"
                    onChange={this.handleTodoInput}
                />
                <input
                    className="input"
                    value={this.state.text}
                    name="text"
                    type="text"
                    placeholder="Notes"
                    onChange={this.handleTodoInput}
                />
                <button onClick={this.addTodoHandler}>Add Note</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesReducer.notes,
    };
};

export default connect(mapStateToProps, {
    addNote,
})(NotesForm);
