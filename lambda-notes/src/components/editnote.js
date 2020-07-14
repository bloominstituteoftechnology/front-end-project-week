import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import EditForm from './edit-form.js';



export default class EditNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: {},
      count: props.count
    }
  }

  componentDidMount(){
    if (this.props.note) {
      this.setState({note: this.props.note})
    };
  }

  render() {
    return (
      <div>
        {(this.props.note) ?
        (<div>
          <div className="links">
            <Link className="link" to={`/listnotes/${this.state.note._id}`}>back</Link>
          </div>
          <h4>Edit Note:</h4>
          <EditForm count={this.state.count} editNote={this.props.editNote} note={this.props.note}></EditForm>
        </div>):
        null}
      </div>
    );
  }
}
