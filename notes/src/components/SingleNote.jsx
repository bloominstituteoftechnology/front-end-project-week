import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      title: "",
      body: "",
      tags: [],
      checklist: []
    };
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  delete = () => {
    this.props.delete(Number(this.props.match.params.id));
    this.props.history.push("/");
  };
  componentDidMount() {
    Modal.setAppElement("body"); //this will mess with css attempts if you're not careful
    const filtNote = this.props.notes.filter(e => {
      if (e.id === Number(this.props.match.params.id)) {
        return true;
      } else {
        return false;
      }
    });
    if (filtNote[0]) {
      this.setState({
        title: filtNote[0].title,
        body: filtNote[0].body,
        tags: filtNote[0].tags,
        checklist: filtNote[0].checklist
      });
    }
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      const filtNote = this.props.notes.filter(e => {
        if (e.id === Number(this.props.match.params.id)) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({
        title: filtNote[0].title,
        body: filtNote[0].body,
        tags: filtNote[0].tags,
        checklist: filtNote[0].checklist
      });
    }
  }
  render() {
    return (
      <div className="notesViewContainer">
        <div className="svButtonRow">
          <Link to={`/input/${this.props.match.params.id}`}>
            <div className="svButtons">edit </div>
          </Link>
          <div onClick={this.openModal} className="svButtons">
            delete
          </div>
        </div>
        <div className="viewTitle">{this.state.title}</div>
        <Markdown className="viewBody" source={this.state.body} />
        <div className="viewBody">
          {this.state.checklist.length > 0 ? (
            <div>
              {" "}
              <div className="tagtitle">Checklist:</div>
              <div className="checkboxArea">
                {this.state.checklist.map((e, i) => {
                  return (
                    <div key={i} className="checkboxRow">
                      <input
                        defaultChecked={e.checked}
                        type="checkbox"
                        onClick={() =>
                          this.props.invert(
                            Number(this.props.match.params.id),
                            e.name
                          )
                        }
                      />
                      {e.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="viewBody">
          {this.state.tags.length > 0 ? (
            <div>
              <div className="tagtitle">Tags:</div>
              <div className="tagArea">
                {this.state.tags.map((e, i) => {
                  return (
                    <div key={i} className="viewTag">
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Delete Modal"
          className="Modal"
        >
          <div className="modalText">Are you sure you want to delete this?</div>
          <div className="modalButtonRow">
            <div onClick={this.delete} className="redButton sidebarButton">
              Delete
            </div>
            <div onClick={this.closeModal} className="sidebarButton">
              No
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SingleNote.propTypes = {
  notes: PropTypes.array
};

export default SingleNote;
