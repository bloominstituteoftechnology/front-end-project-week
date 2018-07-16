import React from "react";
import styled from "styled-components";
import ContentHeading from "../ContentHeading/ContentHeading";
import CardContainer from "./CardContainer";

const ListViewWrapper = styled.div`
  width: 610px;
  position: relative;
  top: 0;
  margin: 0 auto;
  margin-top: 7rem;
`;

// width: 610px

const ListView = props => {
  return (
    <ListViewWrapper>
      <ContentHeading message="Your Notes:" />
      <CardContainer content={props.content} />
    </ListViewWrapper>
  );
};

export default ListView;
