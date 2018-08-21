import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8000/api/notes`)
      .then(response => {
        const note = response.data.filter(note => note.id === Number(id));
        const currentNote = note[0];
        this.setState({ id: Number(id), notes: currentNote });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //Edit
  handleEditTitle = e => {
    this.setState({
      notes: {
        id: this.state.notes.id,
        title: e.target.value,
        content: this.state.notes.content
      }
    });
  };

  handleEditContent = e => {
    this.setState({
      notes: {
        id: this.state.notes.id,
        title: this.state.notes.title,
        content: e.target.value
      }
    });
  };

  handleEditNote = () => {
    const id = this.state.id;
    axios
      .put(`http://localhost:8000/api/notes/${id}`, {
        title: this.state.notes.title,
        content: this.state.notes.content
      })
      .then(response => {
        this.props.history.push("/");
        this.setState({ id: null, notes: [] });
        this.props.handleRefresh();
      })
      .catch(err => console.log(err));
  };

  // editCompleted = () => {
  //   this.handleEditNote(this.props.match.params.id);
  // };

  render() {
    return (
      <div className="edit-note-div">
        <p className="edit-note-title"> Edit Note: </p>
        <form>
          <input
            className="edit-note"
            name="title"
            size="40"
            value={this.state.notes.title}
            onChange={this.handleEditTitle}
          />
          <br /> <br />
          <textarea
            className="edit-note-content"
            type="text"
            cols="80"
            rows="10"
            name="content"
            value={this.state.notes.content}
            onChange={this.handleEditContent}
          />
          <Link to="/">
            <div
              type="button"
              className="update-button"
              onClick={this.handleEditNote}
            >
              Update
            </div>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditNote;
