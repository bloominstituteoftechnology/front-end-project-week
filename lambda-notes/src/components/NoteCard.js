import React from 'react';
import { Card, CardBody,
    } from 'reactstrap';

import { withRouter } from 'react-router-dom';

import './NoteCard.css';

export const NoteCard = props => {
  
    return (
    <div onClick={()=>{props.history.push(`/note-view/${props.id}`)}} className="cardBody">
      <Card>
        <CardBody>
          <div className="flexy">
          <h5 className="title">{props.title}</h5>
          </div>
          <div  className="titleUnderline"></div>
          
          <p className="text"> {props.note} </p>
        </CardBody>
      </Card>
    </div>  
    );
}

export default withRouter(NoteCard);