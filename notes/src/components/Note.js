import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const Note = (props) => {
  const { note } = props;
  return (
    <div className="note">
      {props.single == null 
        ? (
          <Card>
            <CardBody>
              <h5>
                {note.title.slice(0, 20)} 
                {note.title.length > 20 ? '...' : null}
              </h5>
              <hr />
              <CardText>
                {note.text.slice(0, 116)}
                {(note.text.length > 116) ? '...' : null}
              </CardText>
            </CardBody>
          </Card>
        )
        : (
          <div>
            <h2>{note.title}</h2>
            <br />
            {note.text}
          </div>
        )
      }
    </div>
  );
};

export default Note;
