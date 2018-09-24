import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions';

class Notes extends Component {
    componentDidMount() {
		this.props.getNotes(this.props.notes);
	}
    handleTodoComplete = todoId => {
      this.props.toggleTodo(todoId);
    };
  
    removeTodos = () => {
      this.props.removeTodos();
    };

    render() {
      return (
        <div>
         
            {this.props.notes.map(todo => {
              return (
                <div>
                  {todo.text}
                  {todo.title}
                </div>
              );
            })}
          
          <button onClick={() => this.removeTodos()}>Delete</button>
        </div>
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
  })(Notes);
  