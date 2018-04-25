import  React, { Component }  from 'react';
import { Button } from 'reactstrap';
import './CreateNote.css';

export default class extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleInput = e => {
    this.setState ({ [e.target.name]: e.target.value });
  };

//   handleSubmitNote = e => {
//     const { notes } = this.state;
//     notes.push(this.state.)
//   }

render() {
  return <div>
      <h1>Hello Hello Hello</h1>
    </div>;
  }

}

