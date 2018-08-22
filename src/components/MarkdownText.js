import React from 'react';
import Remarkable from 'remarkable';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
  margin-top: 1px;
`;

  /**
 * Returns the text from a HTML string
 * 
 * @param {html} String The html string
 */
function stripHtml(html){
  // Create a new div element
  var temporalDivElement = document.createElement("div");
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  const textContent = temporalDivElement.innerText || "";
  temporalDivElement.remove();
  return textContent;
}


export default props => {
  const md = new Remarkable();
  let preparedText = md.render(props.mdText);
  preparedText = DOMPurify.sanitize(preparedText);
  if (props.plainText) {
    preparedText = `<p>${stripHtml(preparedText)}</p>`;
  }
  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: preparedText }} />;
};
