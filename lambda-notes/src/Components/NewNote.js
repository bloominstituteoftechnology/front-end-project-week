import React, { Component } from "react";
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
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: ""
    };
  }

  addNewNoteHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.notes.push(this.state);
  };

  render() {
    return (
      <Container className="mainContainer" style={{ display: "flex" }}>
        <Col sm="3" className="navCol">
          <NavBar className="navBar" />
        </Col>

        <Col sm="9" className="notesContainer">
          <Form style={{ padding: "20px", marginTop: "35px" }}>
            <h3>Create New Note:</h3>
            <FormGroup style={{ marginTop: "35px" }}>
              <Input style={{ width: "60%"}}
                type="text"
                name="title"
                placeholder="New Title"
                value={this.state.title}
              />
              <br />
              <Input
                style={{ paddingBottom: "400px" }}
                type="textarea"
                name="content"
                placeholder="New Note"
                valid={this.state.note}
              />
              <br />
              <Link to="/">
                <Button
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
