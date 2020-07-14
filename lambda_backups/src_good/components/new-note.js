import React, { Component } from 'react';
import NewForm from './newform.js';
import './css/newnote.css';



export default class NewNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: props.notes,
      count: props.count
    }
  }

  render() {
    console.log(this.props.count)
    return (
      <div className='newNote'>
        <h4 className='newNote'>Create New Note:</h4>
        <NewForm button="Save" count={this.props.count} newNote={this.props.newNote}></NewForm>
      </div>
    );
  }
}
