import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, Button } from "reactstrap";
import { connect } from "react-redux";

const NoteCard = note  => {
  console.log("NoteCard", note);
 
  return (
      
    <div>
      <h1>{note.title}</h1>
    </div>
   
  );
};

export default NoteCard;
