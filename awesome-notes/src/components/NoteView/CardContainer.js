import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
`;

const CardContainer = props => {
  console.log("CARD CONTAINER PROPS", props);
  return (
    <CardWrapper>
      {props.content.map(note => {
        return <Card note={note} key={note._id} />;
      })}
    </CardWrapper>
  );
};

export default CardContainer;
