import React from 'react';
import styled from 'styled-components';

const NotePreview = styled.div`
  width: ${props => props.theme.dimensions.notePreview.width};
  height: ${props => props.theme.dimensions.notePreview.height};
  border-color: ${props => props.theme.color.border};
  border-style: solid;
  border-width: ${props => props.theme.dimensions.notePreview.borderWidth};
  padding: ${props => props.theme.dimensions.notePreview.padding};

  overflow: hidden;
  background-color: ${props => props.theme.color.previewNoteBG};

  h2 {
    padding: ${props => props.theme.dimensions.notePreview.headingPadding};
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.notePreview.headingFontSize};
  }

  p {
    color: ${props => props.theme.color.generalText};
    font-size: ${props => props.theme.dimensions.notePreview.textFontSize};
    padding: ${props => props.theme.dimensions.notePreview.textPadding};
    border-top: ${props => props.theme.dimensions.notePreview.borderWidth} solid
      ${props => props.theme.color.border};
    line-height: ${props => props.theme.dimensions.notePreview.textLineHeight};
    white-space: line-pre;
  }
`;

export default props => {
  const { title, textBody } = props.note;
  // const { color, font } = props.theme;
  return (
    <NotePreview>
      <h2>{title}</h2>
      <p>{textBody}</p>
    </NotePreview>
  );
};
