import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';


  const CreateNewNote = (props) => {
    const {noteTitle, noteText} = props.note;
    return(
      <div>
        <CardTitle>{noteTitle}</CardTitle>
        <CardText>{noteText}</CardText>
      </div>
    )
  }
  


export default CreateNewNote;
