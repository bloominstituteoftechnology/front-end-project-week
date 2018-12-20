import React, { Component } from "react";
import "./ViewNotes.css";

class ViewNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false
    };
  }

  toggle = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  };
  delete = (id) => {
    console.log(id);
    this.props.deleteNote(id)
    .then(promise => {
        console.log(promise);
        if (promise){
            this.props.history.push('/notes')
            this.props.getNotes()
        }
    })}

  render() {
    let note = this.props.notes.find(
      note => note._id === this.props.match.params._id
    );
    if (note === undefined) return <h1>Lost Notes? We'll find it. Hang tight.</h1>;
    return (
      <div className="Views-Container">
        <div
          className={
            this.state.toggleModal ? "Modal-Box" : "Hide-Modal"
          }
        >
          <div className="Confirm-Popup">
            <h2>
               Are you sure you want to delete this?
            </h2>
            <div className="Confirm-field">
              <button
                className="Delete-Button"
                onClick={() => {
                this.delete(note._id);
                }}
              >
                {"Delete"}
              </button>
              <button
                className="Cancel-Button"
                onClick={() => this.toggle()}
              >
                {"No"}
              </button>
            </div>
          </div>
        </div>
        <div className="Spy-Notes">
          <div className="Edit">
            <div
              onClick={() => {
                this.props.updateForm(note);
                this.props.history.push("/createNote");
              }}
            >
              edit
            </div>
            <div onClick={() => this.toggle()}>delete</div>
          </div>
          <h2>{note.title}</h2>
          <p>{note.textBody}</p>
        </div>
      </div>
    );
  }
}

export default ViewNotes;