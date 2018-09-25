import React, { Component } from "react";
import NoteFormEdit from "./noteformedit";
import DeleteModal from "./deletemodal";
import styled from "styled-components";
import axios from "axios";

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
    id: null,
    title: "",
    note: "",
    edittoggle: false,
    Redirect: false
  };

  componentDidMount() {
    axios
      .get(`http://localhost:2200/note/${this.props.match.params.id}`)
      .then(response => {
        console.log(this.props.notes);
        console.log(response.data);
        this.setState({
          id: response.data[0].id,
          title: response.data[0].title,
          note: response.data[0].note,
          edittoggle: false
        });
      })
      .catch(err => console.log(err));
  }

  editHandler = event => {
    event.preventDefault();
    axios
      .put(`http://localhost:2200/note/${this.props.match.params.id}`, {
        title: this.state.title,
        note: this.state.note,
        edittoggle: false
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.setState(
      {
        id: this.state.id,
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
