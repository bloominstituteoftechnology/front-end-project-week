import React from "react";
import styled from "styled-components";
import "../styles/custom-props.css";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import Markdown from 'react-markdown';

const Card = styled.div`
  height: 250px;
  padding: 10px 20px;
  border: 1px solid var(--main-border-color);
  background: var(--note-bg);
  overflow: hidden;
  &:hover {
    color: var(--note-hover-color);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: "capitalize";
  border-bottom: 2px solid var(--main-border-color);
  padding-bottom: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardContent = styled.div`
  font-weight: 200;
  padding: 0.5rem 0;
  word-break: break-all;
`;
const UnstyledLink = styled(Link)`
  color: inherit;
`;

const Note = props => {
  return (
    <UnstyledLink to={`note/get/${props.id}`}>
      <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardContent>
          <Markdown source = { props.textBody } />
        </CardContent>
      </Card>
    </UnstyledLink>
  );
};

export default Note;
