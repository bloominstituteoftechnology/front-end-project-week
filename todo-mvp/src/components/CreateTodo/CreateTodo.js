import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';

class CreateTodo extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <form className="createForm">
          <label>
            Create Todo
          </label>
          <input type="text" placeholder="Enter title"/>
          <input type="text" placeholder="Enter todo text"/>
        </form>
      </div>
    );
  }
}

export default CreateTodo;