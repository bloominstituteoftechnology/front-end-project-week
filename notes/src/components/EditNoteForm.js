import React, { Component } from "react";
import axios from "axios";

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      note: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(res => console.log(res));
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  helper = e => {
    this.props.editNote(e, this.state.note._id, this.state);
    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  };

  render() {
    console.log(this.state.note);
    return (
      <div>
        <div className="notes-header">
          <h3>Edit Note:</h3>
        </div>
        <form onSubmit={this.helper}>
          <input
            className="form-note-title"
            name="title"
            value={this.state.title}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Title"
          />
          <textarea
            className="form-note-content"
            name="textBody"
            value={this.state.textBody}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Content"
          />
          <button className="form-button">Save</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;
