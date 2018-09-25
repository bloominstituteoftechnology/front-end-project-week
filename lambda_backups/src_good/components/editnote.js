import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/edit.css';
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
      <div className="editNote">
        <div className="links">
          <Link className="link" to={`/listnotes/${this.state.note.id}`}>back</Link>
        </div>
        <h4>Edit Note:</h4>
        <EditForm button="Save" count={this.state.count} editNote={this.props.editNote} note={this.state.note}></EditForm>
      </div>
    );
  }
}
