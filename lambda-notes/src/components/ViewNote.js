import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-top: 16px;
  margin-bottom: 25px;
`

const EditDelSpan = styled.span`
  padding-left:1%;
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
const ViewNote = (props) => {
  // (props) ? console.log(props.match.params.id) : null;

  return (
    <div>
      <EditDelDiv>
        <EditDelSpan> <Link to={`/edit-note/${props.id}`}>edit </Link> </EditDelSpan>
         <EditDelSpan> delete </EditDelSpan>
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