import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ""
    };
  }
  render() {
    return (
      <div className="cards">
        {this.props.notes.map(note => {
          return <Note key={Math.random()} note={note} />;
        })}
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
