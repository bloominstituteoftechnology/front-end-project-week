import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import ReactMarkDown from 'react-markdown';

const Note = (props) => {
  const { note, single } = props,
    { title, text } = note;
  return (
    <div className="note">
      {single == null 
        ? (
          <Card>
            <CardBody>
              <h5>
                <ReactMarkDown source={title.slice(0, 17).trim() + (title.length > 17 ? '...' : '')} />
              </h5>
              <hr />
              <CardText>
                <ReactMarkDown source={text.slice(0, 116).trim() + ((text.length > 116) ? '...' : '')} />
              </CardText>
            </CardBody>
          </Card>
        )
        : (
          <div>
            <h2>
              <ReactMarkDown source={title} />
            </h2>
            <br />
            <ReactMarkDown source={text} />
          </div>
        )
      }
    </div>
  );
};

export default Note;
