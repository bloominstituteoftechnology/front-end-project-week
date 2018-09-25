import React from "react";
import { connect } from "react-redux";

import { getNotes } from "../store/actions";

import List from "../components/List";

class ListView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log("list props", this.props);
    return <List {...this.props} />;
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
)(ListView);
