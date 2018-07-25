import React, { Component } from 'react';
import Notes from './Notes';

class ListView extends Component {
  constructor() {
    super();
    state = {
      list: []
    }
  }
  render() {
    return(
      <div className="list-view">
        <Notes />
      </div>
    )
  }
}
