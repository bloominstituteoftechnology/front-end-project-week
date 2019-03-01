import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';

class NotesForm extends Component {
    state = {
        name: "",
        age: "",
        height: ""
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddNote = () => {
        const { name, age, height } = this.state;
        this.props.createNote({ name, age, height });
        this.setState({ name: "", age: "", height: ""})
    };

    render() {
        return (
        <form>
            <input 
                className="input"
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Title"
                onChange={this.handleInputChange}
            />
            <input
                className="input"
                value={this.state.age}
                name="age"
                type="text"
                placeholder="Date"
                onChange={this.handleInputChange}
            />
            <input
                className="input"
                value={this.state.height}
                name="height"
                type="text"
                placeholder="Notes"
                onChange={this.handleInputChange}
            />
            <button onClick={() => this.handleAddNote()} type="button">
                Upload Note
            </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingNote: state.creatingNote
  };
};

export default connect(mapStateToProps, { createNote })(NotesForm);