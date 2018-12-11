


import React, { Component } from "react";
import styled from 'styled-components';
import axios from 'axios';





class CreateNewOnes extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      textBody: ''


    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addNewNote = e => {
    e.preventDefault();
    
  };

  render() {
    return (
      
    );
  };
}

export default CreateNewOnes;

