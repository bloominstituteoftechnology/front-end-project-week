import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateNote } from "../../actions";
import SideBar from "../Sidebar/sidebar";

const NotesTitle = styled.div`
margin: 52px 0 0 5%;
;`
const EditnoteForm = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5%;
`;
const EditNoteButton = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  background: #2bc1c4;
  color: #ffffff;
  border: unset;
  border: 1px #979797 solid;
  width: 30%;
  padding: 8px;
`;
const EditNoteInput = styled.input`
  width: 60%;
  height: 25px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 25px;
  padding-top:5px;
  padding-left:2%
`;
const EditNoteTextArea = styled.textarea`
  height: 200px;
  width: 90%;
  border-radius: 4px;
  margin-bottom: 10px;
`;
class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      id: "",
      tags: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    localStorage.setItem("location", this.props.location.pathname);
    if (this.props.note.title && this.props.note.textBody) {
      this.setState(
        {
          title: this.props.note.title,
          content: this.props.note.textBody,
          id: this.props.note._id,
          tags: this.props.note.tags.toString().replace(/,/g, " ")
        },
        () => localStorage.setItem("note", JSON.stringify(this.props.note))
      );
    } else {
      const note = JSON.parse(localStorage.getItem("note"));
      this.setState({
        title: note.title,
        content: note.textBody,
        id: note._id,
        tags: note.tags.toString().replace(/,/g, " ")
      });
    }
  }
  editNoteObj = () => {
    const editedNote = {
      title: this.state.title,
      textBody: this.state.content,
      tags: this.state.tags.split(" "),
      id: this.state.id
    };
    this.props.updateNote(this.state.id, editedNote, this.props.history);
  };
  render() {
    return (
      <div className="page-container">
        <SideBar />
        <div className="section-container">
          <h1 className="notes-title">Edit Note: </h1>
          <div className="note-container">
            <EditnoteForm>
              <EditNoteInput
                name="title"
                type="text"
                placeholder="Note Title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
              <EditNoteTextArea
                name="content"
                type="text"
                placeholder="Note Content"
                value={this.state.content}
                onChange={this.handleInputChange}
              />
              <EditNoteInput
                name="tags"
                type="text"
                placeholder="Note Tags"
                value={this.state.tags}
                onChange={this.handleInputChange}
              />
              <Link to="/">
                <EditNoteButton onClick={this.editNoteObj}>Save</EditNoteButton>
              </Link>
            </EditnoteForm>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    note: state.note
  };
};
export default connect(
  mapStateToProps,
  { updateNote }
)(withRouter(EditNoteForm));
