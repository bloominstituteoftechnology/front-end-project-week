import React from "react";
import { connect } from "react-redux";

class ViewNote extends React.Component {
  constructor() {
    super();
    this.state = {
      noteID: ""
    };
  }
  render() {
    return (
      <div>
        <p>{this.props.singleNote[0].title}</p>
        <p>{this.props.singleNote[0].body}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleNote: state.singleNote
  };
};

export default connect(
  mapStateToProps,
  {}
)(ViewNote);
