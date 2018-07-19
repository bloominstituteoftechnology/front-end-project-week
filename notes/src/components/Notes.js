import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }
  logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <div className="notesList">
        <p onClick={this.logout} className="logout-button">
          Log Out
        </p>
        <h2>Your Notes: </h2>
        <form className="notesSearch">
          <input placeholder="Search Note..." />
        </form>
        <div className="cards">
          {this.props.notes.map(note => {
            return <Note key={Math.random()} note={note} />;
          })}
        </div>
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
  {}
)(Notes);
