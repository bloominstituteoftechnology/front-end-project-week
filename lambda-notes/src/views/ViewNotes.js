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
    if (note === undefined) return <h1>Gettin' Notified!</h1>;
    return (
      <div className="NotesViewContainer">
        <div
          className={
            this.state.toggleModal ? "Modal-Box" : "Modal-Hidden"
          }
        >
          <div className="Confirmation-Box">
            <h2>
              Are you sure you want to delete this?
            </h2>
            <div className="Button-Box">
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
        <div className="Notes">
          <div className="Edit-Box">
            <div
              onClick={() => {
                this.props.updateForm(note);
                this.props.history.push("/createNote");
              }}
            >
              Edit
            </div>
            <div onClick={() => this.toggle()}>Delete</div>
          </div>
          <h2>{note.title}</h2>
          <p>{note.textBody}</p>
        </div>
      </div>
    );
  }
}

export default ViewNotes;
