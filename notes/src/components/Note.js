import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getNotesById } from "../actions";

class Note extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       note: null
  //     };
  //   }

  componentDidMount() {
    this.props.getNotesById(this.props.match.params.noteId);
  }

  render() {
    if (this.props.isFetching) {
      return <h4>Loading items...</h4>;
    }
    return (
      <div className="notes-wrapper">
        <nav className="sub-nav">
          <div className="sub-nav-links">
            <NavLink exact to={`/edit-note/${this.props.note._id}`}>
              <button>Edit</button>
            </NavLink>
            <NavLink to="/create-note">
              <button>Delete Note</button>
            </NavLink>
          </div>
        </nav>
        <div className="note-body">
          <h2>{this.props.note.title}</h2>
          <p>{this.props.note.textBody}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note,
  isFetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getNotesById }
)(Note);
