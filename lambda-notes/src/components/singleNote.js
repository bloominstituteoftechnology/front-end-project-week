import React, { Component } from "react";
import { connect } from "react-redux";

class SingleNote extends Component {
  state = {
    title: "",
    text: "",
    id: "",
  };
  render() {
    console.log("props", this.props);
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <h3 className="heading">{this.props.notes[id].title}</h3>
        <p>{this.props.notes[id].text}</p>
        <div>Edit</div>
        <div>Delete</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    current: state.current,
    notes: state.notes,
  };
};
export default connect(mapStateToProps)(SingleNote);
