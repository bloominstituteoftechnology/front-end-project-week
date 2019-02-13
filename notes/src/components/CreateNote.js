import React, { Component } from 'react';
import './Nodes.css';
//import axios from 'axios';

class CreateNote extends Component {
constructor(props) {
  super(props);
  this.state = {
    title:'',
    textBody:'',
  }
}
inputChangehandler = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}
render() {
  return (
    test
  )}
}
export default CreateNote;