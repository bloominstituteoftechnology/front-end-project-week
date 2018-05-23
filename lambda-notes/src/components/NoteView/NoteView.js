import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updatingItem, deletingItem } from "../../actions/index";

class NoteView extends Component {
  delete = (e) => {
    const index = this.props.match.params.index;
    const id = this.props.notes[index].id;
    this.props.deletingItem(index, id);
  }

  render() {
    // const id = this.props.match.params.id;
    const index = this.props.match.params.index;
    // const note = this.props.notes.filter(note => note.id == id)[0];
    const note = this.props.notes[index];
    // console.log(note);
    const content = note.content
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    // console.log(content);
    return (
      <React.Fragment>
        <div className="d-flex position-absolute edition">
          <div onClick={this.delete} >delete</div>
          <div>edit</div>
        </div>
        <h5 className="text-capitalize">{note.id}-{note.title}</h5>
        <div className="">{content}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.data
  };
};
export default withRouter(
  connect(mapStateToProps, { updatingItem, deletingItem })(NoteView)
);
