import React from 'react'
import styled from 'styled-components';

const NotePreview = styled.div`
  width: 195px;
  height: 200px;
  overflow: hidden;
  background-color: ${props => props.theme.color.previewNoteBG};

  p {
    color: ${props => props.theme.color.generalText};
  }
`;


 export default (props) => {
  const { title, textBody } = props.note;
  // const { color, font } = props.theme;
  return (
    <NotePreview>
      <h2>{title}</h2>
      <p>
        {textBody}
      </p>
    </NotePreview>
  )
}