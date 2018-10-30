import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class FullNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      deleted: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getNote(id);
  }

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

  deleteNote = id => {
    axios
      .delete(
        `https://fe-notes.herokuapp.com/note/delete/${id}`,
        this.state.notes
      )
      .then(response => {
        this.setState({ deleted: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state.notes)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.deleted === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h2>{this.state.notes.title}</h2>
        <p>{this.state.notes.textBody}</p>
        <button onClick={() => this.deleteNote(this.state.notes._id)}>
          delete
        </button>
        <button onClick={() => this.editNote(this.state.notes._id)}>
          edit
        </button>
      </div>
    );
  }
}

export default FullNote;
