import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const EditDeleteLinks = props => {
  return (
    <LinksWrapper>
      <Link to={`/edit/${props.currentNote._id}`}>edit</Link>
      <a href="something descriptive">delete</a>
    </LinksWrapper>
  );
};

export default EditDeleteLinks;
