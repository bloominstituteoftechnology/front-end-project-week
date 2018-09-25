import React from "react";
import Singlet from "../components/Singlet";

import { connect } from "react-redux";

import { getNotes } from "../store/actions";

class SingleNoteView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log("note props", this.props);
    return <Singlet {...this.props} />;
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    notesList: state.notes
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(SingleNoteView);
