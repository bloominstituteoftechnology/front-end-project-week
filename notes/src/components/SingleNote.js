import React from "react";
import Modal from "./Modal";
import axios from "axios";
import styled from "styled-components";

const NoteCard = styled.div`
  margin-left: 250px;
  padding-top: 4%;
  min-height: 100vh;
  position: relative;
  background-color: #F3F3F3;

  .button-container {
    position: absolute;
    right: 10%;
    top: 2.5%;

    span {
      cursor: pointer;
      margin-left: 25%;
      color: black;
      text-decoration: underline
      font-size: 1.3rem;
      font-weight: normal;
    }
  }

  h2 {
    width: 90%;
    text-align: left;
    margin: 0 auto;
    margin-top: 2%;
  }

  p {
    width: 90%;
    margin: 0 auto;
    margin-top: 3%;
    text-align: left
    line-height: 2rem
    font-size: 1.2rem;
  }
`;

class Note extends React.Component {
  state = {
    note: [],
    showModal: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  delete = () => {
    this.props.delete(this.props.match.params.id);
    this.props.history.push("/notes");
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(err => console.error(err));

    window.scrollTo(0, 0);
  }

  render() {
    const { note } = this.state;

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
