import React from "react";
import styled from "styled-components";
import "../styles/custom-props.css";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
const Card = styled.div`
  height: 250px;
  padding: 10px 20px;
  border: 1px solid var(--main-border-color);
  background: white;
  overflow: hidden;
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

const CardContent = styled.p`
  font-weight: 200;
  padding: 0.5rem 0;
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
          <LinesEllipsis text={props.textBody} 
          maxLine='7'
          ellipsis='...'
          trimRight/>
        </CardContent>
      </Card>
    </UnstyledLink>
  );
};

export default Note;
