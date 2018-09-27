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
    return (
      <div className="list-view">
        <h2>Your Notes:</h2>
        <List {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notesList: state.notes
  };
};
export default connect(
  mapStateToProps,
  { getNotes }
)(ListView);
