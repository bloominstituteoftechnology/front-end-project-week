import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

import styled from "styled-components";

const NoteTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-aling: left;
  color: black;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: bolder;
  padding: 24px;
  max-height: 250px;
  text-align: left;
  font-size: 25px;
`;

const NoteText = styled.div`
  display: flex;
  flex-direction: column;
  text-aling: left;
  color: black;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: light;
  padding: 24px;
  max-height: 250px;
  text-align: left;
  font-size: 15px;
  word-break: break-all;
`;

const Container = {
  display: "flex",
  justifyContent: "right",
  
};

const Update = {
  padding: "10px",
  textDecorationLine: "underline",
  textDecorationStyle: "none",
  textDecorationVolor: "black",
  fontFamily: "Helvetica",
  fontWeight: "light",
  fontSize: "13px",
  color: 'black'
};

const Title = {

  fontFamily: "Helvetica",
  fontWeight: "bolder",
  fontSize: "20px",
  padding: '10px',
  paddingLeft: '24px',
  paddingTop: '40px'

};

const Text = {

  fontFamily: "Helvetica",
  fontWeight: "light",
  fontSize: "10px",
  paddingTop: '10px'
  
};

const Card = {
  marginBottom:' 800px',
  marginLeft:' 40px'
};





class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  componentDidMount() {
    this.getNote(this.props.match.params.id);
  }
  componentWillReceiveProps(noteProps) {
    if (this.props.match.params.id !== noteProps.match.params.id) {
      this.getNote(noteProps.match.params.id);
    }
  }
  getNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <div>
          < div style={Card}>
          <NoteTitle style={Title} >{this.state.note.title}</NoteTitle>
          <NoteText style={Text} >{this.state.note.textBody}</NoteText>
          </div>
          <DeleteModal
            show={this.state.isOpen}
            onClose={this.toggleModal}
            key={this.state.note._id}
            note_id={this.state.note._id}
          >
          
          </DeleteModal>
        </div>
        <div style={Container}>
          <Link
            to={`/edit/${this.state.note._id}`}
            style={{ textDecoration: "none" }}
          >
            <p style={Update}>edit</p>
          </Link>

          <p style={Update} onClick={this.toggleModal}>delete</p>
        </div>
      </>
    );
  }
}

export default Note;
