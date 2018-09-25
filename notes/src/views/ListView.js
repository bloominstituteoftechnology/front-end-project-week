import React from "react";
import { connect } from "react-redux";

import { getNotes } from "../store/actions";

import List from "../components/List";

class ListView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return <List {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notesList: state.notes
});

export default connect(
  mapStateToProps,
  { getNotes }
)(ListView);
