import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import TagDeleteTarget from './TagDeleteTarget.js';


const TagDisplay = styled.div`
  border-radius: ${props => props.theme.dimensions.tagDisplay.borderRadius};
  border-width: ${props => props.theme.dimensions.tagDisplay.borderWidth};
  border-style: solid;
  border-color: ${props => props.theme.color.border};

  div.tagContainer {
    height: ${props => props.small ? null : props.theme.dimensions.tagDisplay.height};
    display: flex;
    flex-flow: row ${props => props.small ? null : 'wrap'};
    justify-content: flex-start;
    overflow-y: ${props => props.small ? null : 'auto'};
    overflow-x: ${props => props.small ? 'auto' : 'null'};
    background-color: ${props => props.theme.color.tagDisplayBG};
  }

  div.trashRow {
    height: ${props => props.theme.dimensions.tagDisplay.iconContainerHeight}

  }
`;

export default ({ tags, theme, writable, deleteTag, small, tagClick }) => {
  const tagElems = tags.map((tag, index) => {
    return (
      <Tag className={`tag color${index % 3}`} key={tag.id} id={tag.id} tag={tag.name} clickHandler={tagClick}/>
    );
  });

  const trashRow = writable ? (
    <div className="trashRow">
      <TagDeleteTarget deleteTag={deleteTag}/>
    </div>
  ) : null;

  return (
    <TagDisplay small={!!small}>
      <div className="tagContainer">{tagElems}</div>
      {trashRow}
    </TagDisplay>
  );
};
