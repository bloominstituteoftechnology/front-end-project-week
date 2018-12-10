import React, { Component } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { notePost } from "../actions";

class CreateView extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.notePost(this.state);
    this.setState({
      title: "",
      textBody: "",
    } );
    setTimeout(this.props.history.push('/'),500) 
    
  };
  render() {
    return (
      <Form
        header='Create New Note:'
        state={this.state}
        submitHandler={this.submitHandler}
        changeHandler={this.changeHandler}
      />
    );
  }
}



export default connect(
  null,
  { notePost }
)(CreateView);
