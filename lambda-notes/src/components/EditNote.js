import React from "react";
import axios from "axios";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getNote(id);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  editNote = id => {
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.notes._id}`,
        this.state.note
      )
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="editNote">
        <h2 className="header">Edit Note</h2>
        <form className="form" onSubmit={() => this.editNote(this.id)}>
          <input
            className="input1"
            onChange={ev => this.handleInputChange(ev)}
            type="textarea"
            name="title"
            value={this.props.title}
            placeholder={this.props.note.title}
            required
          />
          <input
            className="input2"
            onChange={ev => this.handleInputChange(ev)}
            type="textarea"
            name="content"
            value={this.props.content}
            placeholder={this.props.note.content}
            required
          />
          <button
            onClick={() => this.editNote()}
            className="submit"
            type="submit"
          >
            Save Edit
          </button>
        </form>
      </div>
    );
  }
}

export default EditNote;
