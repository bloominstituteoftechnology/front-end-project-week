import React, { Component } from 'react'

export default class Note extends Component {
  state = {
    note: null,
    title: "",
    textBody: ""
  }

  get id() {
    return this.props.match.params.id;
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
};
