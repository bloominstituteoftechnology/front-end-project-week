import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EditNote from "./EditNote";
import { Route } from "react-router-dom";
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
        <Route exact path="/edit" component={EditNote} />
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
