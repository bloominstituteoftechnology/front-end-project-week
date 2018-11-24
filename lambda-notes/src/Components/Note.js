import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const NoteBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
padding: 0px 10px;
margin: 10px;
width: 200px;
height: 250px;
background-color: white;
`

const Title = styled.div`
border-bottom: 1px solid lightgrey;
`

const TextBody = styled.p`
overflow: auto; //Could not get elipses to work
width: 100%;
font-size: 1.4rem;
word-break: break-word;
`

const TitleDisp = styled.h2`
word-break: break-word;
`

const Note = props => {
  return (
    <NoteBox>
      <Title>
        <TitleDisp>{props.title}</TitleDisp>
      </Title>
      <TextBody>
        {props.textBody}
      </TextBody>
    </NoteBox>
  );
};

//Sets default prop values
Note.defaultProps = {
  title: "",
  textBody: ""
};

//Type validation for props
Note.propTypes = {
  title: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired
};

export default Note;