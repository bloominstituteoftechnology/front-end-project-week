import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/lib/Button";
import ReactModal from "react-modal/lib/index";


class ViewNotePage extends React.Component {

  state = {
    note: {},
    confirmDelete: false
  };

  componentDidMount() {
    const noteId = this.props.match.params.id;

    const note = this.props.notes.filter(e => e.id === Number(noteId))[0];
    this.setState({note});
  }

  closeModal = () => {
    this.setState({confirmDelete: false});
  };

  deleteNote = () => {
    this.props.actions.deleteNoteInStore(this.state.note.id);
    this.closeModal();
    this.props.history.push('/');
  };

  showModal = () => {
    this.setState({confirmDelete: true});
  };

  render() {
    const {
      note
    } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <Button style={{float: "right"}} onClick={this.showModal}>Delete</Button>
            <NavLink to={`/edit-note/${note.id}`}>
              <Button style={{float: "right", marginRight: "10px"}}>Edit</Button>
            </NavLink>
          </div>
        </div>
        <div className="row" style={{marginTop: "50px"}}>
          {note && (
            <div className="col-md-8">
              <h3>{note.title}</h3>
              <br/>
              <div>
                {note.message}
              </div>
            </div>
          )}
        </div>
        <ReactModal
          isOpen={this.state.confirmDelete}
          style={{
            content: {
              width: "500px", margin: "auto", height: "200px"
            }
          }}
          contentLabel="Minimal Modal Example"
        >
          <h6>Are you sure?</h6>
          <div className="row">
            <div className="col-md-12" style={{marginTop: "65px"}}>
              <Button onClick={this.deleteNote} style={{float: "right"}}>Yes</Button>
              <Button onClick={this.closeModal} style={{float: "right", marginRight: "10px"}}>No</Button>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewNotePage);