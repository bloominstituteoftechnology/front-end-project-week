import React from "react";
import SingleNote from "../components/SingleNote";

import { connect } from "react-redux";

import { getNotes } from "../store/actions";

class SingleNoteView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log("note props", this.props);
    return <SingleNote {...this.props} />;
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    notesList: state.notes,
    fetchingNotes: state.fetchingNotes
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(SingleNoteView);
