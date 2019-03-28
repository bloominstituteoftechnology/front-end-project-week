import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";

const NoteContainer = styled.div``;

function SingleNote({ note }) {
  // const { id, title, content } = note;
  const { _id, title, textBody } = note;
  return (
    <Link to={`/view-note/${_id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardBody>
          <CardHeader color='info'>
            <div className='headline'>{title}</div>
          </CardHeader>
          <CardBody>
            <div className='content'>{textBody}</div>
          </CardBody>
        </CardBody>
      </Card>
    </Link>
  );
}

export default SingleNote;
