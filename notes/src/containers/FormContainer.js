import React, { Component } from "react";
import Form from "../components/Form";
import { MainContent } from "../styles";

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  render() {
    return (
      <MainContent>
        <Form editing={this.state.editing} />
      </MainContent>
    );
  }
}
