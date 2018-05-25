import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions/notesAction"
import { Link } from "react-router-dom";

class ShowNote extends React.Component {
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

  promptNoteDelete = (id) => {
    let confirm = prompt("Are you sure you want to delete, Type yes if you do");
    if(confirm === "yes") {
      this.props.deleteNote(id);
      this.props.history.push("/");
    } else {
      alert("Please type in yes if you want to delete");
    }
  }

  render() {
    console.log(this.props.note);

    console.log(this.props.note);
    return (
      <div className="show-wrapper">
        <section className="edit-delete">
          <Link to={`/edit/${this.props.match.params.id}`}>
            <button onClick={this.reload}>
              edit
            </button>
          </Link>
          <button onClick={() => this.promptNoteDelete(this.props.match.params.id)}>
            delete
          </button>
        </section>
        { this.props.note &&
          <section className="show-content">
         <h1>{this.props.note.title}</h1>
        <pre>{this.props.note.body}</pre>
         </section>
        }
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {deleteNote})(ShowNote);