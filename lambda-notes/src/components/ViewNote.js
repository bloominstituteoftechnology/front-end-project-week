import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// CSS
import {borderColor, accentColorPrimary } from '../components/css/Globals'

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-top: 16px;
  margin-bottom: 25px;
`

const EditDelSpan = styled.span`
  padding-left:1%;
  color: ${accentColorPrimary};
  &:hover {
    cursor: pointer;
    text-decoration:underline;
  }
`

const EditDelDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align:right;
  padding-right: 12px;
  margin-top: 16px;
  font-size: 1.5rem;

`

const TextBody = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  line-height: 25px;
`

const StyledLink = styled(Link)`
  text-decoration:none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  color:${accentColorPrimary};
  &:hover{
    color:${accentColorPrimary}
  }
`
const ViewNote = (props) => {
  // (props) ? console.log(props.match.params.id) : null;

  return (
    <div>
      <EditDelDiv>
        <EditDelSpan> <StyledLink to={`/edit-note/${props.id}`}>edit </StyledLink> </EditDelSpan>
         <EditDelSpan onClick={() => props.onDeleteLinkClick(props.id)}> delete </EditDelSpan>
      </EditDelDiv>
      <Header>
        {props.title}
      </Header>
      <TextBody>
        {props.textBody}
      </TextBody>
    </div>
  );
};

export default ViewNote;