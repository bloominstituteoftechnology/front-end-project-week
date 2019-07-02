import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { colors } from './variables';

export const ViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  background: ${colors.backgroundColor};
  padding: 64px 30px 0 40px;
  /* border: 1px solid rgb(152, 152, 152); */
  overflow-y: scroll;
  @media (max-width: 700px) {
    padding-top: 44px;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: 7px;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 214px;
  background: ${colors.buttonColor};
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;
  padding: 15px 0;
  /* border: 1px solid gray; */
  border-radius: 7px;
  box-shadow: 0px 3px 10px -3px rgb(0, 0, 0);
  :active {
    box-shadow: inset 0px 2px 10px -1px rgb(0, 0, 0);
  }
  @media (max-width: 700px) {
    padding: 6.5px 0;
  }
`;

export const StyledH3 = styled.h3`
  font-size: 2.3rem;
  color: ${colors.textColor};
`;

export const StyledP = styled(Markdown)`
  text-align: left;
  font-size: 1.6rem;
  color: ${colors.textColor};
  margin-top: 9px;
  & p,
  th,
  td,
  div,
  span,
  applet,
  object,
  iframe,
  blockquote,
  a,
  pre,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
  & h1 {
    font-size: 4rem;
    line-height: 4rem;
  }
  & h2 {
    font-size: 3rem;
    line-height: 3rem;
  }
  & h3 {
    font-size: 2.3rem;
    line-height: 2.3rem;
  }
  & h4 {
    font-size: 2rem;
    line-height: 2rem;
  }
  & h5 {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
  & h6 {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;

export const StyledForm = styled.form`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 33px 0;
`;

export const StyledInput = styled.input`
  max-width: 402px;
  font-size: 1.6rem;
  color: ${colors.textColor};
  ::placeholder {
    color: rgb(152, 152, 152);
  }
  padding: 14px 12px;
  border: 1px solid ${colors.borderColor};
  border-radius: 7px;
  margin-bottom: 16px;
  @media (max-width: 700px) {
    padding: 6px;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 56vh;
  resize: none;
  font-size: 1.6rem;
  color: ${colors.textColor};
  ::placeholder {
    color: rgb(152, 152, 152);
  }
  padding: 14px 12px;
  border: 1px solid ${colors.borderColor};
  border-radius: 7px;
  margin-bottom: 16px;
`;
