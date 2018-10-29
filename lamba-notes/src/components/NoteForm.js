import React from 'react';
import axios from 'axios';

class NoteForm extends React.Component {
  constructor(props){
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }

  addNote = event => {
    event.preventDefault();

    axios
    .post('https://killer-notes.herokuapp.com/note/create', {
      title: this.state.title,
      textBody: this.state.textBody
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

    this.setState({
      title: "",
      textBody: ""
    });
  };

  handleInputChange = event => {
    this.setState({ [e.target.title]: e.target.value })''
  };

  clickHandler = event => {
    event.preventDefault();
  };

  

  render(){
    return (
      <div>

      </div>
    )
  }


}