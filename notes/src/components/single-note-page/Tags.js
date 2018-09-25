import styled from 'styled-components';
import React from 'react';
import { Tag } from './Tag';


const TagsCont = styled.div `
  height: 80px;
  padding: 10px 5px;
  width: 500px;
  margin: 0 auto;
`;

const TagsInput = styled.input `
  width: 100%;
`;

export const Tags = (props) => {
  const tags = props.tags.split(" ")
  return (
    <TagsCont>
      <form onSubmit={(event) => {props.submitTags(props.id); event.preventDefault(); props.history.push(`/notes/${props.id}`)}}>
        <TagsInput name='newTags' placeholder='Add tags separated by a space, click to remove' onChange={props.change} value={props.newTags} />
      </form>
      {tags.map(item => <Tag tag={item} tags={tags} removeTag={props.removeTag} id={props.id} history={props.history} />)}
    </TagsCont>
  )
}
