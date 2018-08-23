import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { greatToLeast, leastToGreat } from "../actions";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      notes: [],
      dummy: "You did not create any notes."
    };
  }

  componentDidMount() {
    const notes = this.props.notes;
    this.setState({ loading: true, notes });
  }

  render() {
    if (this.props.name) {
      return (
        <div className="side-bar">
          <h1
            className={
              this.props.name
                ? "application-title deleting"
                : "application-title"
            }
          >
            Lambda Notes
          </h1>
          <button className="btn-side-bar deleting">View Your Notes</button>
          <button className="btn-side-bar deleting">+ Create New Note</button>
        </div>
      );
    }
    return (
      <div className="side-bar">
        <h1 className="application-title">Lambda Notes</h1>
        <Link to="/">
          <button className="btn-side-bar">View Your Notes</button>
        </Link>
        <Link to="/create-note">
          {" "}
          <button className="btn-side-bar">+ Create New Note</button>{" "}
        </Link>
        <Link to="/rhyme-book">
          {" "}
          <button className="btn-side-bar">Rhyme Book</button>
        </Link>
        <Link to="/search">
          {" "}
          <button className="btn-side-bar">Search</button>
        </Link>
        <Link to="/trash">
          {" "}
          <button className="btn-side-bar">Trash</button>
        </Link>
        <CSVLink
          data={
            this.props.notes.length && !this.props.notes.includes(undefined)
              ? this.props.notes
              : this.state.dummy
          }
        >
          <button className="btn-side-bar">Download Notes To CSV</button>
        </CSVLink>
        <button className="btn-side-bar">Sort Great to Least</button>
        <button className="btn-side-bar">Sort Least to Great</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    addingNote: state.addingNote,
    updatingNote: state.updatingNote,
    deletingNote: state.deletingNote,
    gettingNotes: state.gettingNotes,
    selecting: state.selecting,
    error: state.error,
    select: state.select,
    nextId: state.nextId
  };
};

export default connect(
  mapStateToProps,
  { greatToLeast, leastToGreat }
)(withRouter(SideBar));
