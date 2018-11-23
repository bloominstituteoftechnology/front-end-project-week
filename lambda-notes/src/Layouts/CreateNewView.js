import React, { Component } from 'react'
import CreateNote from '../components/CreateNote';

 class YourNotes extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container">
        <CreateNote />
      </div>
      </React.Fragment>
    )
  }
}

export default YourNotes;