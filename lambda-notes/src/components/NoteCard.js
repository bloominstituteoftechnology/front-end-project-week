import React from 'react';
import { Card, CardText, CardBody,
    CardTitle,} from 'reactstrap';

import { withRouter } from 'react-router-dom';

import './NoteCard.css';

export const NoteCard = props => {
  
    return (
    <div onClick={()=>{props.history.push(`/note-view/${props.id}`)}} className="cardBody">
      <Card>
        <CardBody>
          <div  className="titleUnderline"><h5 className="title">{props.title}</h5></div>
          <p className="text"> {props.note} </p>
        </CardBody>
      </Card>
    </div>  
    );
}

export default withRouter(NoteCard);