import styled from 'styled-components';
import React from 'react';

const TagBtn = styled.button `
  height: 40px;
  width: 70px;
  background-color: #41f4c4;
  color: white;
  border-radius: 15px;
`;

export const Tag = (props) => {
  return (
    <TagBtn onClick={(event) => {props.removeTag(props.tags.indexOf(props.tag), props.id); props.history.push(`/notes/${props.id}`)}}>{props.tag}</TagBtn>
  )
}
