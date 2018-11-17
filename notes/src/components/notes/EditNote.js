import React, { Component } from "react";
import axios from 'axios';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    textBody: "",
    note:[]
    };

    
  }
  componentDidMount(){
    this.getNote(this.props.match.params.id)
 }

 getNote = id => {
  axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
     .then(response => {this.setState({note: response.data})})
     .catch(err => console.log(err))
}

  editNote = event => {
    event.preventDefault();
    const notes= {
      title: this.state.title,
      textBody: this.state.textBody,
      id: this.props.match.params.id
    
    }
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${notes.id}`, notes).then(response => {
      this.setState({
        notes: response.data
      }, () => console.log("success"))

    }).catch(error => {
      console.error('Server Error', error);
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

;

  render() {

    return (
      <div className="container">
        <form onSubmit={this.editNote}>
          <h2>Edit Note</h2>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder={this.state.note.title}
          />
          <textarea rows="8" cols="80"
            type="text"
            name="textBody"
            id="textBody"
            value={this.state.textBody}
            onChange={this.handleChange}
            placeholder={this.state.note.textBody}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default EditNote;
