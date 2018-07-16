import React, { Component } from 'react';

class NewNote extends Component {
constructor(){
  super();
  this.state = {
    title: "",
    body: "",
    id: ""
  }
}
  render() {
    return (
      <div>Hello World</div>
    );
  }

}

export default NewNote;
