import React, { Component } from "react";
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
      completed: ""
    };
  }

  completeHandler = () => {
    if (this.state.completed === "") {
      this.setState({ completed: "line-through" });
    } else if (this.state.completed === "line-through") {
      this.setState({ completed: "" });
    }
  };

  render() {
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
                Basketball ipsum dolor sit amet free throw basketball basket
                bank shot, outlet power forward flop zone defense Duncan. ...
              </CardText>
        </Link>
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default NoteCard;
