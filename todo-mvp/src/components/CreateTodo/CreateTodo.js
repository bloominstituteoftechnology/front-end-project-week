import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

import './CreateTodo.css'

class CreateTodo extends Component {
  render() {
    return (
      <div className="CreateTodo">
        <Navigation />
        <form className="create-form">
          <label className="input-label">
            <h2>Create New Todo:</h2>
          </label>
          <input className="input-title" type="text" placeholder="Enter title"/>
          <input className="input-body" type="text" placeholder="Enter todo text"/>
          <Link to="/"><button type="submit">Save</button></Link>
        </form>
      </div>
    );
  }
}

export default CreateTodo;