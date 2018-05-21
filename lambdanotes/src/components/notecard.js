import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './notecard.css';

const NoteCard = (props) => {
  return (
    <Card body>
      <CardTitle>{props.note.title}</CardTitle>
      <CardText>dfkljdfklgjdf dgfkj dfklgj kldfjg kldfjg kldfjgkl dfjgkl jdfklgj kldfgj kldfgj kldfjg kldfjgkl jdfklg jdfklgj kldfgj kldfjg kldfjgkl dfjgkl jdfklg jdfklgj dklfgj kldfjg kldfjg kdfjg kldfjg kldfjgkl jfdklj kldfjgkl dfjgkljd fklgj dklfjg kldfjg kldfjg kldfjg kldfjg kldfjg kldfjg kldfjg kldfjgkl dfjg ldfgjk jd klgdfjkl dfjgkl jdfklgj dfkljg kldfjg kldfjg kldfjg kldfjg kldfjg kldfjg kldfjg kldfjgkl jdf</CardText>
    </Card>
  );
}

export default NoteCard;
