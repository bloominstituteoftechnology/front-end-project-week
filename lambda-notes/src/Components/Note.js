import React, { Component } from "react";
import NoteCard from "./NoteCard";
import { Col, Row, Container, Input } from "reactstrap";
import NavBar from "./NavBar";
import "./NoteCss.css";
import { Link } from "react-router-dom";
import DeleteModal from "./deleteModal";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: ""
    };
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
    return (
      <Container className="mainContainer" style={{ display: "flex" }}>
        <Col sm="3" className="navCol">
          <NavBar className="navBar" />
        </Col>
        {/* EndNav */}
        <Container className="notesContainer">
          <br />
          <Row style={{ display: "flex" }}>
            <Link className="editLink" to="/edit">
              edit
            </Link>
            <DeleteModal />
          </Row>
          <h3 className="noteP" style={{ textDecoration: `${this.state.completed}`}} >
            <Input
              type="checkbox"
              onClick={this.completeHandler}
              style={{ marginTop: "12px",  }}
            />Note Name
          </h3>
          <p className="noteP">
            Basketball ipsum dolor sit amet free throw basketball basket bank
            shot, outlet power forward flop zone defense Duncan. Nowitzki James
            Duncan rip alley-oop three. Bryant swish power forward center post
            Barkley key. Basketball ipsum dolor sit amet free throw basketball
            basket bank shot, outlet power forward flop zone defense Duncan.
            Nowitzki James Duncan rip alley-oop three. Bryant swish power
            forward center post Barkley key Basketball ipsum dolor sit amet free
            throw basketball basket bank shot, outlet power forward flop zone
            defense Duncan. Nowitzki James Duncan rip alley-oop three. Bryant
            swish power forward center post Barkley key. Basketball ipsum dolor
            sit amet free throw basketball basket bank shot, outlet power
            forward flop zone defense Duncan. Nowitzki James Duncan rip
            alley-oop three. Bryant swish power forward center post Barkley key{" "}
          </p>

          <p className="noteP">
            Basketball ipsum dolor sit amet free throw basketball basket bank
            shot, outlet power forward flop zone defense Duncan. Nowitzki James
            Duncan rip alley-oop three. Bryant swish power forward center post
            Barkley key. Basketball ipsum dolor sit amet free throw basketball
            basket bank shot, outlet power forward flop zone defense Duncan.
            Nowitzki James Duncan rip alley-oop three. Bryant swish power
            forward center post Barkley key Basketball ipsum dolor sit amet free
            throw basketball basket bank shot, outlet power forward flop zone
            defense Duncan. Nowitzki James Duncan rip alley-oop three. Bryant
            swish power forward center post Barkley key. Basketball ipsum dolor
            sit amet free throw basketball basket bank shot, outlet power
            forward flop zone defense Duncan. Nowitzki James Duncan rip
            alley-oop three. Bryant swish power forward center post Barkley key{" "}
          </p>
        </Container>
      </Container>
    );
  }
}

export default Note;
