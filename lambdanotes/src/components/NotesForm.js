import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class NotesForm extends Component {
    state = {
        title: '',
        textBody: '',
    };

    handleTodoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodoHandler = e => {
        e.preventDefault();
		console.log(this.state);
        this.props.addNote (this.state);
        this.props.history.push("/");
        
    };

    render() {
        return (
            <form className="Column-Layout">
                <input
                    className="input"
                    value={this.state.title}
                    name="title"
                    type="text"
                    placeholder="Note Title"
                    onChange={this.handleTodoInput}
                />
                <input
                    className="input"
                    value={this.state.textBody}
                    name="textBody"
                    type="text"
                    placeholder="Note Comment"
                    onChange={this.handleTodoInput}
                />
                <button onClick={this.addTodoHandler}>Add Note</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps, {
    addNote,
})(NotesForm);
