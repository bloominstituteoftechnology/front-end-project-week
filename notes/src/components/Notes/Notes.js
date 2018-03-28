import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class Notes extends Component {
  render() {
    return (
      <CardColumns>
        <Card>
          <CardBody>
            <CardTitle> Note </CardTitle>
            <CardText>
              lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.
            </CardText>
            <Link to={'/NoteView'}>
              <Button>View Note</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Note </CardTitle>
            <CardText>
              lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.
            </CardText>
            <Link to={'/NoteView'}>
              <Button>View Note</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Note </CardTitle>
            <CardText>
              lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.
            </CardText>
            <Link to={'/NoteView'}>
              <Button>View Note</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Note </CardTitle>
            <CardText>
              lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.
            </CardText>
            <Link to={'/NoteView'}>
              <Button>View Note</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Note </CardTitle>
            <CardText>
              lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.
            </CardText>
            <Link to={'/NoteView'}>
              <Button>View Note</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Note </CardTitle>
            <CardText>
              lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentialy unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem Ipsum.
            </CardText>
            <Link to={'/NoteView'}>
              <Button>View Note</Button>
            </Link>
          </CardBody>
        </Card>
      </CardColumns>
    );
  }
}

export default Notes;

// Create a Constructor Function for this document to make it easier to repeat.