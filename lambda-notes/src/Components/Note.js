import React, { Component } from "react";
import NoteCard from "./NoteCard";
import axios from 'axios';
import { Col, Row, Container, Input } from "reactstrap";
import NavBar from "./NavBar";
import "./NoteCss.css";
import { Link } from "react-router-dom";
import DeleteModal from "./deleteModal";

class Note extends Component {
  constructor() {
    super();
    this.state = {
      note: {},
      completed: ""
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:5000/api/notes/${id}`)
    .then(response => {
      this.setState(() => ({ note: response.data }))
      console.log(this.state.note)
    })
  }

  completeHandler = () => {
    if (this.state.completed === "") {
      this.setState({ completed: "line-through" })
    }
    else if (this.state.completed === "line-through") {
        this.setState({ completed: "" })
    }
  };
  render() {
    console.log("note props", this.props)
    return (
      <Container className="mainContainer" style={{ display: "flex" }}>
        <Col sm="3" className="navCol">
          <NavBar className="navBar" />
        </Col>
        {/* EndNav */}
        <Container className="notesContainer">
          <br />
          <Row style={{ display: "flex" }}>
            <Link className="editLink" note={this.props} to={`/edit/${this.state.note._id}`}>
              edit
            </Link>
            <DeleteModal note={this.state.note} props={this.props}/>
          </Row>
          <h3 className="noteP" style={{ textDecoration: `${this.state.completed}`}} >
            <Input
              type="checkbox"
              onClick={this.completeHandler}
              style={{ marginTop: "12px",  }}
            />{this.state.note.title}
          </h3>
          <p className="noteP" style={{ textDecoration: `${this.state.completed}` }} >
            {this.state.note.content}
          </p>
        </Container>
      </Container>
    );
  }
}

export default Note;
