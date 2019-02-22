import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes, deleteNote } from "../actions/noteActions";

import { Button } from "react-bootstrap";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  deleteToggleOn = () => {
    this.setState({ delete: true });
  };

  deleteToggleOff = () => {
    this.setState({ delete: false });
  };

  render() {
    if (this.props.notes.length) {
      let note = this.props.notes.find(
        note => `${note.id}` === this.props.match.params.id
      );

      const deleteNotes = event => {
        event.preventDefault();
        this.props.deleteNote(note.id);
        this.props.history.push("/");
      };

      return (
        <div>
          {this.state.delete && (
            <div>
              <div>
                <p>Are you sure you want to delete this?</p>
                <div>
                  <Button
                    variant="danger"
                    style={{ width: "75px", margin: "0 10px" }}
                    onClick={deleteNotes}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="info"
                    style={{ width: "75px", margin: "0 10px" }}
                    onClick={this.deleteToggleOff}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div>
            <Link to={`/note/${note.id}/edit`} style={{ color: "black" }}>
              <Button 
                variant="info" 
                style={{ marginRight: "10px", width: "75px", background: "#373737" }}>
                Edit
              </Button>
            </Link>
            <Button
              variant="danger"
              onClick={this.deleteToggleOn}
            >
              Delete
            </Button>
          </div>
          <div>
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
});

export default connect(
  mapStateToProps,
  { fetchNotes, deleteNote }
)(Note);