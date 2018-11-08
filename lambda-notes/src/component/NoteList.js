import React, { Component } from 'react';
import axios from 'axios';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      modal: false,
      editing: false,
      editedText: ''
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.getNote(id);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  editChangeHandler = event => {
    let _editedText = event.target.value;
    this.setState({ editedText: _editedText });
  };
  getNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(error => console.log(error));
  };
  editHandler = event => {
    event.preventDefault();
    this.setState({ editing: true, editedText: this.state.note });
  };
  render() {
    let viewStyle = {};
    let editStyle = {};
    if (this.state.editing) {
      viewStyle.display = 'none';
    } else {
      editStyle.display = 'none';
    }
    return (
      <div>
        <div style={viewStyle} onDoubleClick={this.editHandler}>
          <h2>{this.state.note.title}</h2>
          <p>{this.state.note.textBody}</p>
        </div>
        <input
          name="title"
          type="text"
          style={editStyle}
          onKeyDown={this.editSubmitHandler}
          onChange={this.ChangeHandler}
          value={this.state.editedText}
        />
        <input
          name="textBody"
          type="textarea"
          style={editStyle}
          onKeyDown={this.editSubmitHandler}
          onChange={this.ChangeHandler}
          value={this.state.editedText}
        />
      </div>
    );
  }
}
export default NoteList;
