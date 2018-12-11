import React, { Component } from "react";
import axios from "axios";



class ViewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      id: '',
      modal: false,
    }
  }


  componentDidMount() {
    console.log('TESTcomponentDidMount.axios.get');
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then()
  }



  render() {
    return();
  }
}

export default ViewNote;

