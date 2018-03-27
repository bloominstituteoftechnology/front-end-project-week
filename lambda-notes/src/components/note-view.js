import React, { Component } from "react";
import { Link } from "react-router-dom";

import DeleteModal from "./delete-modal";


class NoteView extends Component {
	deletePopup = false;

	state = {
		id: 0,
		title: '',
		body: ''
	};

  toggleModal = _ => {
    this.deletePopup = !this.deletePopup;
    this.forceUpdate();
  };

  componentDidMount() {
    this.setState({
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body
    });
  }


  render() {
    const { id, title, body } = this.state;
    return (
      <div className="Each__View">
        {this.deletePopup ? (
          <div>
            <DeleteModal
              id={id}
              toggleModal={this.toggleModal}
              handleDeletModal={this.props.handleDeleteModal}
            />
          </div>
        ) : null}
        <div className="Each__Links">
          <div>
            <Link className="Each__Link" to={"/edit"}>
              edit
            </Link>
          </div>
          <div>
            <a className="Each__Link" onClick={() => this.toggleModal()}> delete</a>
          </div>
        </div>
          <div>
            <h2 className="Each__Title">{title}</h2>
            <div className="Each__Body">{body}</div>
          </div>
      </div>
    );
  }
}


export default NoteView;