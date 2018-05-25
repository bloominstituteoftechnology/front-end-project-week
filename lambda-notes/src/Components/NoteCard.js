import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap";
import { connect } from "react-redux";
import "./NoteCss.css";

const NoteCard = props => {
  console.log("NoteCard");

  return (
    <Link to="/Note" style={{ textDecoration: "none", color: "black" }}>
      <Card className="noteCard">
        <CardBody>
          <CardHeader style={{ padding: "0px", backgroundColor: "white" }}>
            <CardTitle style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Note Title
            </CardTitle>
          </CardHeader>
          <CardText
            style={{
              paddingTop: "10px",
              fontFamily: "Raleway",
              fontWeight: "medium"
            }}
          >
            Basketball ipsum dolor sit amet free throw basketball basket bank
            shot, outlet power forward flop zone defense Duncan. ...
          </CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default NoteCard;
