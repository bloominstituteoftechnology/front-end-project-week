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
      <div>
        {this.props.notes.map(note => {
          return (
            <div>
              <Note note={note} />
            </div>
          );
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
