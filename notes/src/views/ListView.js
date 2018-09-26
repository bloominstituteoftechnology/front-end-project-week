import React from "react";
import { connect } from "react-redux";

import { getNotes } from "../store/actions";

import List from "../components/List";

class ListView extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getNotes();
    }, 1000);
  }

  render() {
    console.log("list props", this.props);
    return <List {...this.props} />;
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
)(ListView);
