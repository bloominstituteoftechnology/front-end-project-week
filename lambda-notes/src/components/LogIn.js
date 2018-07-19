import React, { Component } from 'react'

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false,
    }
  }
  
  render() {
    const { authorized } = this.state;
    const { render, ...passedProps };
    if (authorized) {
      this.props.render(passedProps);
    }
    else return <Login />
  }
}
