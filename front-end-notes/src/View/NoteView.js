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
      <div>
        <div
          className={
            this.state.toggleModal ? "Modal-Container" : "Modal-Hidden"
          }
        >
          <h1>Hey Nedim! You are cool!</h1>
          <button
            onClick={() => {
              this.props.deleteNote(note._id);
              this.props.history.push("/notes");
            }}
          >
            {" "}
            let's delete this sucker{" "}
          </button>
        </div>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
        <button onClick={() => this.toggle()}>delete</button>
        <button onClick={() => {this.props.updateForm(note); this.props.history.push('/createNote')}}>edit</button>
      </div>
    );
  }
}

export default NoteView;
