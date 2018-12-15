import React, { Component } from "react";

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

    console.log("Here we are - getting notified!");
    if (note === undefined) return <h1>Getting Notes</h1>;
    return (
      <div className="ViewNotesContainer">
        <div
          className={
            this.state.toggleModal ? "Modal-Container" : "Modal-Hidden"
          }
        >
          <div className="Delete-Confirm">
            <h2>
              Hi there! Just a friendly confirmation - are you sure you want to delete this?
            </h2>
            <div className="Delete-Btn">
              <button
                className="Delete-Modal"
                onClick={() => {
                this.delete(note._id);
                }}
              >
                {"It is done."}
              </button>
              <button
                className="Modal-Cancel-Delete"
                onClick={() => this.toggle()}
              >
                {"I changed my mind! Don't do it!"}
              </button>
            </div>
          </div>
        </div>
        <div className="Note-View">
          <div className="Edit-Deletes">
            <div
              onClick={() => {
                this.props.updateForm(note);
                this.props.history.push("/createNewNote");
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