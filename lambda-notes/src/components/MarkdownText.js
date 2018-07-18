import React from 'react';
import Remarkable from 'remarkable';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
  margin-top: 1px;
`;

export default props => {
  const md = new Remarkable();
  const preparedText = DOMPurify.sanitize(md.render(props.mdText));
  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: preparedText }} />;
};
