import styled from 'styled-components';
import React from 'react';
import { Tag } from './Tag';


const TagsCont = styled.div `
  height: 80px;
  padding: 10px 5px;
  width: 100%;
`;

export const Tags = (props) => {
  const tags = props.tags.split(" ")
  return (
    <TagsCont>
      <input name='newTags' placeholder='Tags separated by a space' value={props.newTags} />
      {tags.map(item => <Tag tag={item} removeTag={props.removeTag} />)}
    </TagsCont>
  )
}
