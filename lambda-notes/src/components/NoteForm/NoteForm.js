import React, { Component } from 'react';
import Button from '../Button';
import axios from 'axios';
import history from '../Routes/history';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      contents: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]:event.target.value });
  }
  saveForm = event => {
    // create new or update
    if(this.state.title !== ''){
      const newNote = {
        title: this.state.title,
        contents: this.state.contents
      };

      const redirect = (this.props.noteId) ? `/note/${this.props.noteId}` : "/";

      axios.post('http://localhost:5000/notes', newNote)
        .then(response => history.push(redirect))
        .catch(error => console.error(error));
    }
  }
  componentDidMount(){
    if (this.props.noteId){
      axios.get(`http://localhost:5000/notes/${this.props.noteId}`)
        .then(response => this.setState({ title: response.data.title, contents: response.data.contents }))
        .catch(error => console.error(error));
    }
  }
  render() { 
    return (
      <React.Fragment>
        <div className="save-note-form">
          <input
            className="form-control title"
            type="text"
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            className="form-control contents"
            name="contents"
            placeholder="Note Content"
            value={this.state.contents}
            onChange={this.handleChange}
          />
          <Button
            type="primary"
            title={this.props.action}
            clickAction={this.saveForm}
            // link={(this.props.noteId) ? `/note/${this.props.noteId}` : "/"}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default NoteForm;