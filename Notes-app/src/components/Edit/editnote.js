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
  }

  render() {
    return (
      <div className="card-container">
        <SideBar />
        <section className="card">
          <h1 className="new-title"> Edit Note: </h1>
          <form className="new-form">
            <input
              className="new-input"
              placeholder={this.state.note.title}
              onChange={this.handleInputChange}
              value={this.state.title}
              name="title"
            />
            <input
              className="body-text"
              placeholder={this.state.note.textBody}
              onChange={this.handleInputChange}
              value={this.state.textBody}
              name="textBody"
            />

            <Link to={`/note/${this.state.id}`}>
              <button
                className="new-butt"
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
