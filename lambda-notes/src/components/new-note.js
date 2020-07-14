import React, { Component } from 'react';
import NewForm from './newform.js';
import {Link} from 'react-router-dom';
import './css/newnote.css';


export default class NewNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      // notes: props.notes,
      // count: props.count
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="links">
          <Link
            className="link"
            to={`/listnotes/`}
          >back</Link>
        </div>
        <h4>Create New Note:</h4>
        <NewForm button="Create" count={this.props.count} newNote={this.props.newNote}></NewForm>
      </div>
    );
  }
}
