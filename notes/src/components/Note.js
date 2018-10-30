import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-modal";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      showModal: false
    };
    console.log(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(res => console.log(res));
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  deleteNoteHelper = e => {
    e.preventDefault(e);
    this.props.deleteNote(e, this.state.note._id);
    this.props.history.push("/");
  };

  render() {
    if (!this.state.note) {
      return <div>loading note</div>;
    }
    const { title, textBody, _id } = this.state.note;
    return (
      <div>
        <div>
          <Link to={`/edit/${_id}`}>
            <p>edit</p>
          </Link>
          <div onClick={this.openModal}>delete</div>
        </div>
        <div>
          <h1>{title}</h1>
          <p>{textBody}</p>
        </div>
        <div>
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.closeModal}
            contentLabel="Are you sure you want to delete?"
          >
            <Link to="/">
              <button onClick={this.deleteNoteHelper}>Delete</button>
            </Link>
            <button onClick={this.closeModal}>No</button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(Note);

/* <div
  onClick={e => {
    this.props.deleteNote(e, _id);
  }}
>
  delete
</div>; */
