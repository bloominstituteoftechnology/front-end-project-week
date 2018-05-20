import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <Link to={`/noteview/${props.note._id}`}>
      <Card
        body
        className="m-3"
        style={{ overflow: 'hidden', height: '250px', width: '200px' }}
        outline
      >
        <CardTitle>{props.note.title}</CardTitle>
        <hr />
        <CardText>{props.note.body}</CardText>
      </Card>
    </Link>
  );
};
