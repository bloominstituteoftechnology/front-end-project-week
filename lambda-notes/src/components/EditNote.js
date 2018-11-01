import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      _id: "",
      updatedNote: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getNoteID(id);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editNote = e => {
    e.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.state._id}`,
        this.state
      )
      .then(response => this.props.history.push(`/note/${response.data._id}`))
      .catch(err => console.log(err));
  };

  getNoteID = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response =>
        this.setState({
          title: response.data.title,
          textBody: response.data.textBody,
          _id: response.data._id
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.updatedNote === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="editNote">
        <h2 className="header">Edit Note:</h2>
        <form className="form" onSubmit={this.editNote}>
          <input
            className="input1"
            onChange={this.handleInputChange}
            type="text"
            name="title"
            value={this.state.title}
            placeholder="New Title"
            required
          />
          <input
            className="input2"
            onChange={this.handleInputChange}
            type="text"
            name="textBody"
            value={this.state.textBody}
            placeholder="New Content"
            required
          />
          <button className="submit" type="submit">
            Save Edit
          </button>
        </form>
      </div>
    );
  }
}

export default EditNote;
