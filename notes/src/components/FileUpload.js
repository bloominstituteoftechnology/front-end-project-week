import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import './App.css';


class FileUpload extends Component {

  handleClick = (event) => {
    this.props.deleteNote(this.props.match.params.id)
  }

  render() {
    return (
      <form action="./images/myw3schoolsimage.jpg" method="post" enctype="multipart/form-data">
        <input type="file" onChange={this.handleFileUpload} />
        <a href="./images/myw3schoolsimage.jpg" download >
          Download me here
          </a>
      </form>
    )
  }

  handleFileUpload({ file }) {
  // const file = files[0];
  this.props.actions.uploadRequest({
     file,
     name: 'Awesome Cat Pic'
  })
}
}

export default FileUpload
