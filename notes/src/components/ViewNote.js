import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

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
        <Link exact to="/edit">
          Edit
        </Link>
        <Button color="primary">Delete</Button>
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
