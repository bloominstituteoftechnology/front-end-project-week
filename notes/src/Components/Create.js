import React, { Component } from 'react';
import './Create.css';

class List extends Component {
  render() {
    return (
      <div className="AddNote">
        <h4 className="Title">Create New Note:</h4>
        <form className="Form">
          <input
            className="input-title"
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.handleChange}
          />
          <input
            className="input-body"
            type="text"
            name="content"
            placeholder="Note Body"
            onChange={this.handleChange}
          />
          <button className="SaveButton" onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default List;
