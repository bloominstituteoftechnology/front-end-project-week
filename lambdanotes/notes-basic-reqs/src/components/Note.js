import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
// import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Note = props => {
    return (
        <div class="card-decks">
        <div class="card">
            <CardBody>
                <Link to={`/note/${props.note.id}`}>
                    <CardTitle>{props.note.title}</CardTitle>
                </Link>
                <hr />
                <div class="col-12 text-truncate">
                <p class ="CardText">{props.note.text}</p>
                </div>
            </CardBody>
        </div>
        </div>
        
    )
}


export default Note;


const Example = (props) => {
    return (
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    );
  };