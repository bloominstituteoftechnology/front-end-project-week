import React from 'react';
import { Card, CardText, CardBody,
    CardTitle,} from 'reactstrap';
import './NoteCard.css';

export const NoteCard = props => {
    return (
    <div className="cardBody">
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText className="text"> {props.note} </CardText>
        </CardBody>
      </Card>
    </div>  
    );
}

export default NoteCard;