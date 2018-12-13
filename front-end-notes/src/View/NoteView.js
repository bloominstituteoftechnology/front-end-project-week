import React, { Component } from "react";
import "./NoteView.css";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false
    };
  }
  // console.log(props.match.params);
  // console.log(props.notes);

  toggle = () => {
    this.setState({
      toggleModal: !this.state.toggleModal
    });
  };

  render() {
    let note = this.props.notes.find(
      note => note._id === this.props.match.params._id
    );

    console.log("yo we are inside noteview!");
    if (note === undefined) return <h1>Getting some note...</h1>;
    return (
      <div className="NoteViewContainer">
        <div
          className={
            this.state.toggleModal ? "Modal-Container" : "Modal-Hidden"
          }
        >
          <div className="Confirmation-Box">
            <h2>
              Hey! Are you sure you want to proceed down this path? Only pain
              and ruin await those that carelessly toss away the past.
            </h2>
            <div className="Button-Box">
              <button
                className="Modal-Button-Delete"
                onClick={() => {
                  this.props.deleteNote(note._id);
                  this.props.history.push("/notes");
                }}
              >
                {"Delete this filth."}
              </button>
              <button
                className="Modal-Button-Cancel"
                onClick={() => this.toggle()}
              >
                {"Cancel that, Rogue Leader."}
              </button>
            </div>
          </div>
        </div>
        <div className="Note-View">
          <div className="Edit-Delete-Box">
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

export default NoteView;
