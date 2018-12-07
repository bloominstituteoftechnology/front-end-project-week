import React from "react";
import Modal from "./Modal";
import { NoteCard } from "../styled/SingleNote";
import { fetchSingle } from "../actions";

// import axios from "axios";
import { connect } from "react-redux";

class Note extends React.Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    // axios
    //   .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    //   .then(res => this.setState({ note: res.data }))
    //   .catch(err => console.error(err));
    this.props.fetchSingle(id);
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
    const { note } = this.props;
    // console.log(this.props.match.params.id);
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

const mapStateToProps = state => {
  return {
    note: state.note,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSingle }
)(Note);
