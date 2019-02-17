import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import get from 'lodash/get';
import { updateNote } from "../../actions";
import SideBar from "../Sidebar/sidebar";

const EditnoteForm = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
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
    if (this.props.note.title && this.props.note.content) {
      this.setState(
        {
          title: this.props.note.title,
          content: this.props.note.content,
          id: this.props.note.id,
        }
      );
    }
  }
  editNoteObj = () => {
    const editedNote = {
      title: this.state.title,
      content: this.state.content,
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
          <h1 className="notes-title">Edit Note:</h1>
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
                <EditNoteButton onClick={this.editNoteObj}>Update</EditNoteButton>
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
    note: get(state, 'note.note[0]', {}),
  };
};
export default connect(
  mapStateToProps,
  { updateNote }
)(withRouter(EditNoteForm));
