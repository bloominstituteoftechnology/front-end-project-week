import React from 'react';
import { Card, CardText, CardBody,
    CardTitle,} from 'reactstrap';
import './NoteCard.css';

export const NoteCard = props => {
    return (
    <div className="cardBody">
      <Card>
        <CardBody>
          <div className="titleUnderline"><h5 className="title">{props.title}</h5></div>
          <p className="text"> {props.note} </p>
        </CardBody>
      </Card>
    </div>  
    );
}

export default NoteCard;