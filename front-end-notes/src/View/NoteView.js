import React, { Component } from "react";
import "./NoteView.css";

class NoteView extends Component {
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


  // WHAT IS THIS WIZARDRYYYYYYYYYYY
  //Daniel's hax
  delete = (id) => {
    console.log(id);

    this.props.deleteNote(id)
    .then(promise => {
        console.log(promise);
        if (promise){
            this.props.history.push('/notes')
            // THAT IS AMAZING, BUT WHYYYYYY WHYYYYY DO WE NEED TO DO IT THIS WAY?
            this.props.getNotes()
        }
    })}





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
                //   this.props.history.push("/notes");
                //   this.props.deleteNote(note._id);
                // Daniel's hax
                this.delete(note._id);
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
