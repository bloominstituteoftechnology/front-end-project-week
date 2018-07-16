import React from "react";
import styled from "styled-components";

// width: 610px
const CardWrapper = styled.div`
  height: 190px;
  width: 190px;
  border: 1px solid black;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 2px;
`;

const CardHeader = styled.h3``;

const CardBody = styled.p``;

const Card = props => {
  return (
    <CardWrapper>
      <CardHeader>{props.note.title}</CardHeader>
      <CardBody>{props.note.textBody}</CardBody>
    </CardWrapper>
  );
};

export default Card;
