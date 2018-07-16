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

const CardHeader = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
`;

const CardBody = styled.p`
  margin: 0;
`;

const Card = props => {
  return (
    <CardWrapper>
      <CardHeader>{props.note.title}</CardHeader>
      <hr />
      <CardBody>{props.note.textBody}</CardBody>
    </CardWrapper>
  );
};

export default Card;
