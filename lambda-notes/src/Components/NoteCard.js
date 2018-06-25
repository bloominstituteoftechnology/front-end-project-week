import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import "./NoteCss.css";

class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      completed: ""
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/notes')
    .then(notes => {
      console.log("notesAxios", notes)
      this.setState(() => ({ notes: notes.data }));
    })
    .catch(err => {
      console.error("Server Error", err);
    })
  }

  completeHandler = () => {
    if (this.state.completed === "") {
      this.setState({ completed: "line-through" });
    } else if (this.state.completed === "line-through") {
      this.setState({ completed: "" });
    }
  };

  render() {
    console.log("notes1", this.state.notes)
    return (
      <div>
          <Card className="noteCard">
            <CardBody>
        <Input type="checkbox" onClick={this.completeHandler} style={{ marginLeft: '-15px'}} />
        <Link to="/Note" style={{ textDecoration: "none", color: "black" }}>
              <CardHeader style={{ padding: "0px", backgroundColor: "white" }}>
                <CardTitle
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    textDecoration: `${this.state.completed}`
                  }}
                >
                  Note Title
                </CardTitle>
              </CardHeader>
              <CardText
                style={{
                  textDecoration: `${this.state.completed}`,
                  paddingTop: "10px",
                  fontFamily: "Raleway",
                  fontWeight: "medium"
                }}
              >
               
              </CardText>
        </Link>
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default NoteCard;
