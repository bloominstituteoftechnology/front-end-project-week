


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
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state)
      .then(res => {
        this.setState({ title: '', textBody: '' });
        this.props.history.push('/');
      })
      .catch(err => console.log(err, "Nothing Made"));
  };

  render() {
    return (
      <CreateViewWrapper>
        <CreateHeader>Create New Note:</CreateHeader>

      </CreateViewWrapper>
    );
  };
}

export default CreateNewOnes;

