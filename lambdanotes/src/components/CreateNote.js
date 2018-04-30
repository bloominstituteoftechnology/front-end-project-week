import React, { Component } from 'react';
import './components.css';
import { addTodo } from './actions';
import { connect } from 'react-redux';

class CreateNote extends Component {
    constructor() {
        this.state = {
            newTitle: '',
            newContent: '',
        }
    }
    handleAdd = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmitItem = () => {

    }

    render() {
        return (
        <div className="CreateNote__Container">
            <div className="CreateNote__Title">
                Create New Note:
            </div>
            <form className="CreateNote__Form">
                <input type="text" placeholder="Note Title" className="CreateNote__NoteTitleFormInput" onChange={this.handleAdd} name="newTitle" value="this.state.newTitle" />
                <input type="text" placeholder="Note Content" className="CreateNote__NoteContentFormInput" onChange={this.handleAdd} name="newContent" value= "this.state.newContent"/>
            <button className="CreateNote__SaveButton" onClick={this.handleSubmitItem}>Save</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state
    };
  }



export default connect(mapStateToProps, { addTodo })(App);