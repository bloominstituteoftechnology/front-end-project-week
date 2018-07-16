import React from "react";
import styled from "styled-components";

const LinksWrapper = styled.div`
  display: flex;
  height: 5rem;
  width: 12rem;
  position: relative;
  top: -5rem;
  right: -50rem;
  text-decoration: none;
  a {
    margin: 1rem;
    color: black;
  }
  a:hover {
    color: black;
  }
`;

const EditDeleteLinks = () => {
  return (
    <LinksWrapper>
      <a href="something descriptive">edit</a>
      <a href="something descriptive">delete</a>
    </LinksWrapper>
  );
};

export default EditDeleteLinks;
