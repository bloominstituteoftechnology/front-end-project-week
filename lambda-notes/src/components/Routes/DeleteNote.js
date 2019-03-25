import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../../actions/index";
import styled from "styled-components";

const Modal = styled.div`
    dispaly flex;
    justify-content: center;
    align-items: center;
    margin-left: 40%;
    width: 30%;
    height: 160px;
    border: 1px solid red;
    background-color: white;
    z-index: 1;
    `;
const DeleteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin-top: 5px;
`;
const Buttons = styled.button`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Del = Buttons.extend`
  background-color: red;
  margin-right: 10px;
`;
const Cancel = Buttons.extend`
  background-color: lightblue;
  margin-left: 10px;
`;

class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      content: "",
      id: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    let note = this.props.notes.find(note => {
      return id === note._id.toString();
    });
    this.setState({ id: note._id, title: note.title, content: note.content });
  }

  render() {
    console.log(this.state.id);
    return (
      <Modal>
        <Heading>
          <h2>Are you sure you want to delete this?</h2>
        </Heading>
        <DeleteBox>
          <Link to='/'>
            <Del onClick={() => this.props.deleteNote(this.state.id)}>
              Delete
            </Del>
          </Link>
          <Cancel>No</Cancel>
        </DeleteBox>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes
  };
};

export default connect(
  mapStateToProps,
  { deleteNote }
)(DeleteNote);
