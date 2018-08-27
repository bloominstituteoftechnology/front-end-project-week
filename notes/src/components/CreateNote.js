import React, { Component } from "react";
import styled from "styled-components";
import {Page, PageHeader} from './styles'
import Form from './Form'


class CreateNote extends Component {
  state = {
    title: "",
    body: "",
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({
        title: this.state.title,
        body: this.state.body,
    });
    this.setState({
        title: "",
        body: "",
    });
};
  render() {
    return (
      <Page>
        <PageHeader>Create New Note:</PageHeader>
        <Form
        label="Save"
        title={this.state.title}
	    body={this.state.body}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
         />
      </Page>
    );
  }
}

export default CreateNote;
