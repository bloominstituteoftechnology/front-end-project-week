import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions';

class NotesForm extends Component {
    state = {
        title: '',
        text: '',
    };



    handleTodoInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodoHandler = e => {
        const { text } = this.state;
        const { title } = this.state;
        const newTodo = {
            text,
            title,
            completed: false,
            id: this.props.todos ? this.props.todos.length + text : 0 + text
        };
        this.props.addTodo(newTodo);
        this.setState({
            text: '',
            title: ''
        });
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
                <button onClick={this.handleSubmit}>Add Note</button>
            </form>
        );
    }
}
// Hey Redux?! Whatever is state in the store, could throw it on Props inside
// this react component?
const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};

export default connect(mapStateToProps, {
    addTodo,
    toggleTodo,
    removeTodos,
    getTodos
})(NotesForm);
