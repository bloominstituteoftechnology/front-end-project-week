import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import trashIcon from '../assets/trash-icon.svg';

const TagDisplay = styled.div`
    border-radius: ${props => props.theme.dimensions.tagDisplay.borderRadius};
    border-width: ${props => props.theme.dimensions.tagDisplay.borderWidth};
    border-style: solid;
    border-color: ${props => props.theme.color.border};


  div.tagContainer {
    height: ${props => props.theme.dimensions.tagDisplay.height};
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  img {
    color: blue;
    margin: ${props => props.theme.dimensions.tagDisplay.tagMargin};
  }

  div.tag {
    width: ${props => props.theme.dimensions.tagDisplay.tagWidth};
    height: ${props => props.theme.dimensions.tagDisplay.tagHeight};
    margin: ${props => props.theme.dimensions.tagDisplay.tagMargin};
    border-radius: ${props => props.theme.dimensions.tagDisplay.borderRadius};
    border-width: ${props => props.theme.dimensions.tagDisplay.borderWidth};
    border-style: solid;
    border-color: ${props => props.theme.color.border};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.color.tagBG};

    h3 {
      font-size: ${props => props.theme.dimensions.tagDisplay.fontSize};
      color: ${props => props.theme.color.tagText};
    }
  }
`;

export default ({ tags, theme, writable }) => {
  const tagElems = tags.map((tag, index) => (
    <div className={`tag color${index % 3}`} key={shortid.generate()}>
      <h3>{tag}</h3>
    </div>
  ));
  const trashRow = writable ? (
    <div className="trashRow">
      <img src={trashIcon} alt="trashcan" height="25px" />
    </div>
  ) : null;

  return (
    <TagDisplay>
      <div className="tagContainer">{tagElems}</div>
      {trashRow}
    </TagDisplay>
  );
};
