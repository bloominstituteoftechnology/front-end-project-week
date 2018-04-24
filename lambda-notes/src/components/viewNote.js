import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Form, Input, Row, Col, Button } from 'reactstrap';

class CreateNote extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     title: '',
  //     content: ''
  //   }
  // }

  render() {
    return (
      <div>
        <br /><br />
        <h3>{this.props.selectedNote.title}</h3><br />
        <p>{this.props.selectedNote.content}</p>
      </div>
    );
  }

}

export default withRouter(CreateNote);
