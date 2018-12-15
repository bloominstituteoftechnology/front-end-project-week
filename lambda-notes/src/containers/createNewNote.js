import React, { Component } from "react";
import {
  getNotes,
  updateNote,
  updateForm,
  addNote,
} from "../actions";

const HeaderWrapper = styled.div`
  height: 100px;
  margin: 0px 10px;
  padding: 40px 0;
  font-size: 4rem;
  font-weight: bold;
`;

class createNewNotes extends Component {

  constructor() {
    super();
    this.state = {
      tags: "",
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    console.log("testing testing testing - what?.");
    this.updateNote();
  }
  componentDidUpdate(previousProps) {
    if (this.props.addingNote !== previousProps.addingNote) {
      if (!this.props.addingNote) {
        console.log("we be fetchng");
        this.props.getNotes();
        this.props.history.push("/notes");
      }
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    console.log("1 if by land, 2 if by sea!");
    event.preventDefault();
    if (this.props.currentNote) this.props.updateNote(this.state);
    else this.props.addNote(this.state);
    this.setState({
      tags: "",
      title: "",
      textBody: ""
    });

    console.log(this.props.notes);
  };

  updateNote = () => {
    this.setState(this.props.currentNote);
  };

  render() {
    if (this.props.addingNote) {
      console.log("stuff and things");
      return <h1>something goes here</h1>;
    }
    return (
      <>
        <div className="Form-Container">
          <HeaderWrapper>Create a Note:</HeaderWrapper>

          <form onSubmit={this.submitHandler}>
            <input className="enter-title"
              onChange={this.changeHandler}
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Add a Title"
            />
            <textarea className="enter-text"
              onChange={this.changeHandler}
              type="text"
              name="textBody"
              value={this.state.textBody}
              placeholder="Add Text"
            />
            <input className="input-tags"
              onChange={this.changeHandler}
              type="text"
              name="tags"
              value={this.state.tags}
              placeholder="Add a Tag"
            />
            <button>
              {this.props.currentNote ? `Update Note!` : `Save Note!`}
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentNote: state.currentNote,
  newNoteID: state.newNoteID,
  addingNote: state.addingNote
});

export default connect(
  mapStateToProps,
  { getNotes, updateNote, updateForm, addNote }
)(createNewNotes);