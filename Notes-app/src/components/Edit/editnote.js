import React, { Component } from "react";
import { SideBar } from "../Sidebar/sidebar";
import { updateNote } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EditNote extends Component {
  state = {
    note: {
      id: 0,
      title: "",
      textBody: ""
    }
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updateHandler = () => {
    const id = this.props.match.params.id;
    const { title, textBody } = this.state;
    this.props.updateNote({ id, title, textBody });
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const newNote = this.props.notes.filter(note => {
      console.log(note);
      return note.id === Number(id);
    });
    console.log(newNote);
    this.setState({ note: newNote[0], id: id });
    this.setState({ id: id });
  }

  render() {
    return (
      <div className="new-page">
        <SideBar />
        <section>
          <h1 className="notes-title create"> Edit Note: </h1>
          <form>
            <input
              className="input"
              placeholder={this.state.note.title}
              onChange={this.handleInputChange}
              value={this.state.title}
              name="title"
            />
            <input
              className="content"
              placeholder={this.state.note.textBody}
              onChange={this.handleInputChange}
              value={this.state.textBody}
              name="textBody"
            />

            <Link to={`/note/${this.state.id}`}>
              <button
                className="update"
                type="button"
                onClick={() => this.updateHandler()}
              >
                Update
              </button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { updateNote }
)(EditNote);
