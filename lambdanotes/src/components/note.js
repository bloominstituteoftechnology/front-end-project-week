import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import NoteFormEdit from "./noteformedit";
import DeleteModal from "./deletemodal";
import { Button } from "reactstrap";
import styled from "styled-components";

const NoteAttrib = styled.div`
  background: #f2f1f2;
  width: 75%;
  border: 2px solid #56aaad;
  border-left: 0;
`;

const NoteButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NoteButton = styled.button`
  color: white;
  background: #24b8bd;
  margin: 10px;
  border: 2px solid #56aaad;
  font-size: 12px;
`;

const NoteTitle = styled.h4`
  text-align: left;
  margin: 20px 30px;
  font-weight: bold;
`;

const NoteContent = styled.p`
  text-align: left;
  margin: 0 30px;
`;

class Note extends Component {
  state = {
    title: "",
    note: "",
    id: null,
    edittoggle: false,
    Redirect: false
  };

  componentDidMount() {
    const note = this.props.notes.filter(note => {
      return note.id.toString() === this.props.match.params.id;
    });
    this.setState({
      title: note[0].title,
      note: note[0].note,
      id: note[0].id,
      edittoggle: false
    });
  }

  editHandler = event => {
    event.preventDefault();
    this.setState(
      {
        title: this.state.title,
        note: this.state.note,
        edittoggle: false,
        Redirect: true
      },
      () => {
        this.setState({ Redirect: false });
      }
    );
  };

  editToggle = () => {
    let edit = this.state.edittoggle;
    this.setState({ edittoggle: !edit });
  };

  handleEditChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <NoteAttrib>
        {this.state.edittoggle === false ? (
          <div>
            <NoteButtons>
              <NoteButton color="info" onClick={this.editToggle}>
                EDIT
              </NoteButton>
              <DeleteModal
                {...this.props}
                deleteHandler={this.props.deleteHandler}
                history={this.props.history}
              />
            </NoteButtons>
            <div>
              <NoteTitle>{this.state.title}</NoteTitle>
              <NoteContent>{this.state.note}</NoteContent>
            </div>
          </div>
        ) : (
          <NoteFormEdit
            notes={this.state}
            handleEditChange={this.handleEditChange}
            editHandler={this.editHandler}
            editToggle={this.editToggle}
            Redirect={this.props.Redirect}
          />
        )}
      </NoteAttrib>
    );
  }
}

export default Note;
