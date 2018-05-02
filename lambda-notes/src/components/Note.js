import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Edit from './Edit';

class Note extends Component {
    render() {
      return (
          <div>
              <h1> Single Note </h1>
            <Route path='/note/:id' component={ Edit }/>
          </div>
      );
    }
  }
  
  export default Note;