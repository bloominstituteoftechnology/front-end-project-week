import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Button, CardTitle, CardText, CardDeck } from "reactstrap";
import { connect } from "react-redux";
import './NoteCss.css'

const NoteCard = props => {
  console.log("NoteCard", );
 
  return (
    <Link to="/Note" style={{ textDecoration: "none", color: "black" }}>
    <Card className="noteCard">
        <CardBody>
        <CardTitle>Title</CardTitle>
        <CardText>Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan.</CardText>
        </CardBody>
    </Card>
   </Link>
  );
};

export default NoteCard;
