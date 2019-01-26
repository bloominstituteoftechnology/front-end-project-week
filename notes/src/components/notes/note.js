import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Note = (props) => (
  <Card className="mb-5">
    <Link to={`/notes/${props.data.id}`}>
      <CardBody>
        <CardTitle>{props.data.title}</CardTitle>
        <ReactMarkdown source={props.data.textBody} />
        {props.data.tags !== null ? (
          <CardText>
            {'tags: '}
            {props.data.tags}
          </CardText>
        ) : null}
      </CardBody>
    </Link>
  </Card>
);
export default Note;
