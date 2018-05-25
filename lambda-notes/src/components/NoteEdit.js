import React from "react";
import { connect } from "react-redux";
import { editNote } from "../actions/notesAction";

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
  }

  reload = () => {
    window.location.reload()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let note = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.editNote(this.props.match.params.id ,note);
    this.setState({title: "", body: ""});
    this.props.history.push("/");
    // this.reload();
  }

  render() {
    return (
      <div className="add-note">
        <h2>Edit Note</h2>
        { this.props.note &&
        <form onSubmit={this.handleSubmit}>
            <input
              className="add-title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              required
              placeholder="Enter Title"
            />
            <br />
            <textarea
              className="add-body"
              onChange={this.handleChange}
              value={this.state.body}
              type="text"
              name="body"
              required
              placeholder="Notes..."
            >
            </textarea>
            <br />
            <button className="add-btn">
              Update Note
            </button>
          </form>
        }
        </div>
    );
  }
}

const mapStateToProps = (state, ownPorps) => {
  return {
    note: state.notes[ownPorps.match.params.id]
  };
};

export default connect(mapStateToProps, { editNote })(NoteEdit);