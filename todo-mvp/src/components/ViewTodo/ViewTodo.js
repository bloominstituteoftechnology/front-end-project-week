import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

import './ViewTodo.css';

class ViewTodo extends Component {
  render() {
    return (
      <div className="ViewTodo">
        <Navigation />
        <div className="todo-form">
          <Link to='/'><button>Update</button></Link>
          <Link to='/'><button>Delete</button></Link>
        </div>
      </div>
    );
  }
}

export default ViewTodo;