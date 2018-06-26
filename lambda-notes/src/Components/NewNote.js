import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import {
  Form,
  Input,
  Button,
  FormGroup,
  Col,
  Container,
  Row
} from "reactstrap";
import './NoteCss.css'
import { Link } from "react-router-dom";

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    };
  }

  newNote = () => {
    axios.post('http://localhost:5000/api/notes', 
    {
      title: this.state.title,
      content: this.state.content
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  }

  addNewNoteHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="mainContainer" style={{ display: "flex" }}>
        <Col sm="3" className="navCol">
          <NavBar className="navBar" />
        </Col>

        <Col sm="9" className="notesContainer">
          <Form style={{ padding: "20px", marginTop: "35px" }}>
            <h3 style={{ fontFamily: "Roboto", fontWeight: 'bold'}} >Create New Note:</h3>
            <FormGroup onSubmit={this.newNote} style={{ marginTop: "35px" }}>
              <Input style={{ paddingTop: "10px", paddingLeft: "20px", width: "60%"}}
                type="text"
                name="title"
                placeholder="Note Title"
                onChange={this.addNewNoteHandler}
                value={this.state.title}
              />
              <br />
              <Input
                style={{ paddingBottom: "400px", paddingTop: "20px", paddingLeft: "20px" }}
                type="textarea"
                name="content"
                placeholder="Note Content"
                onChange={this.addNewNoteHandler}
                value={this.state.content}
              />
              <br />
              <Link onClick={this.forceUpdate} to="/">
                <Button
                onClick={this.newNote}
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: "#2BC1C4",
                    color: "#FFFFFF",
                    width: "200px",
                    borderRadius: "0",
                    padding: "8px"
                  }}
                >
                  Save
                </Button>
              </Link>
            </FormGroup>
          </Form>
        </Col>
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//     console.log("NavBarState2", state.notes);
//     return {
//       notes: state.notes
//     };
//   };

export default NewNote;
