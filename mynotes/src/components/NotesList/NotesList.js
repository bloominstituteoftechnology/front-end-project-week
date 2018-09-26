import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions";
import "./index.css";

const mapStateToProps = state => {
  // console.log("STATE: ", state);
  return {
    notesArray: state
  };
};

class NotesList extends Component {
  
  componentWillMount() {
    let reversed = Array.from(this.props.notesArray).reverse();
    this.setState({ notesArray: reversed });
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  generateNotes = (what) => {
    return (
      <Link to={`/note/${what._id}`} className="unstyled_link" key={what._id}>
        <div className="note">
          <div>
            <h4>{what.title}</h4>
            <div className="blackline"/>
            <p>{what.textBody}</p>
          </div>
        </div>
      </Link>
    );
  };

  render() {
    // console.log("This state.notes", this.props.notesArray);
    return (
      <div className="notesList_container">
        <div>
          <h3 className="content_header">Your Notes:</h3>
        </div>
        <div className="notesList">
          {this.props.notesArray.map(this.generateNotes)}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesList);
