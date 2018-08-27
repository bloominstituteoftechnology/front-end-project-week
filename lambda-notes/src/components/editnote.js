import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import EditForm from './edit-form.js';


export default class EditNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: props.note,
      count: props.count
    }
  }

  sendToApp = () => {

  }

  render() {
    return (
      <div>
        <div className="links">
          <Link className="link" to={`/all-notes/${this.state.note.id}`}>back</Link>
        </div>
        <h4>Edit Note:</h4>
        <EditForm button="Save" count={this.state.count} editNote={this.props.editNote} note={this.state.note}></EditForm>
      </div>
    );
  }
}
