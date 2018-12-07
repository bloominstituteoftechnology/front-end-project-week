import React from "react";
import Modal from "./Modal";
import axios from "axios";
import { NoteCard } from "../styled/SingleNote";

class Note extends React.Component {
  state = {
    note: [],
    showModal: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(err => console.error(err));

    window.scrollTo(0, 0);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  delete = () => {
    this.props.delete(this.props.match.params.id);
    this.props.history.push("/notes");
  };

  render() {
    const { note } = this.state;
    console.log(this.props.match.params.id);
    return (
      <>
        <Modal
          show={this.state.showModal}
          kill={this.delete}
          close={this.toggleModal}
        />
        <NoteCard>
          <div className="button-container">
            <span
              onClick={() =>
                this.props.history.push(
                  `/edit-note/${this.props.match.params.id}`
                )
              }
            >
              edit
            </span>
            <span onClick={this.toggleModal}>delete</span>
          </div>

          <h2>{note.title}</h2>
          <p>{note.textBody}</p>
        </NoteCard>
      </>
    );
  }
}

export default Note;
