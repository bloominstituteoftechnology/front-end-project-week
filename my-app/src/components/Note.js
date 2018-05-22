import React, { Component } from 'react';
import './note.css';

import { Route, Link } from 'react-router-dom';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

  const Notes = props => {
      console.log("Props, ", props)
     
    return (
        <div className="itemFlex">
            {props.notesState.map(item => {
                return (
                    <Card className="note"  key={item.id}>
                    <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <hr />
                    <CardText>{item.comment}</CardText>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
  }
  
 
export default Notes;