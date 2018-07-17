import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./ListView.css";

// width: 610px
const CardWrapper = styled.div`
  height: 190px;
  width: 190px;
  border: 1px solid black;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 2px;
`;

const CardHeader = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
`;

const CardBody = styled.p`
  margin: 0;
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 7em;
  line-height: 1.8em;
`;

const Card = props => {
  return (
    <Link to={`/note/${props.note._id}`} className="link">
      <CardWrapper>
        <CardHeader>{props.note.title}</CardHeader>
        <hr />
        <CardBody>{props.note.textBody}</CardBody>
      </CardWrapper>
    </Link>
  );
};

export default Card;
