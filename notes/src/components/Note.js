import React from 'react';
import { Card, CardBody } from 'reactstrap';
import ReactMarkDown from 'react-markdown';

const Note = ({ note, view }) => {
  const { title, text } = note;
  return (
    <div className="note">
      {view !== 'single' 
        ? (
          <Card>
            <CardBody>
              <h5>
                <ReactMarkDown source={title} />
              </h5>
              <hr />
              <ReactMarkDown source={text.slice(0, 103).trim() + ((text.length > 103) ? '...' : '')} />
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
