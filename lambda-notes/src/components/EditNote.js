import React, { Component } from 'react';
import '../index.css';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const note = this.props.notes.find(note => `${note.id}` === id);
    console.log(note)
    this.setState({
      title:note.title,
      textBody:note.textBody,
    })
}
  editNote = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    this.props.updateNote(id, this.state);
      this.setState({
      title: '',
      textBody: '',
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
        return (
          <div className="modifynote container">
            <h2>Edit Note:</h2>
        <form onSubmit={this.editNote}>
              <input className="input"
            onChange={this.handleInputChange}
            value={this.state.title}
            name="title"
          />
          <textarea
            className="textarea"
            onChange={this.handleInputChange}
            value={this.state.textBody}
            name="textBody"
          >
          </textarea><br/>
          <button className="link" type="submit">Update</button>
        </form>
      </div>
    );
  }
}


export default EditNote

