import React, { Component } from "react";

export default class NoteView extends Component {
constructor(props){
    super(props);
    this.state = {
      
    }
}

  render() {
      console.log('im props', this.props);
  return (
<div>
  <div>note view</div>
</div>
);
  }
}
