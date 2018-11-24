import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Note from "./Note";

const NotesListContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #ccffff;
border: 1px solid grey;
width: 100%;
`
const Header = styled.div`
margin-left: 50px;
`

const UlContainer = styled.div`
display: flex;
width: 100%;
`

const List = styled.ul`
display: flex;
flex-wrap: wrap;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`

const NotesList = props => {
  if (!props.notes) {
    return (
      <div>
        <h1>Loading Notes...</h1>
      </div>
    );
  } else {
    return (
      <NotesListContainer>
        <Header>
          <h1>Your Notes:</h1>
        </Header>
        <UlContainer>
          <List>
            {props.notes
              .map(note => {
                return (
                  <StyledLink to={`/${note._id}`} id={note._id} key={note._id}>
                    <Note
                      title={note.title}
                      id={note._id}
                      textBody={note.textBody}
                      key={note._id}
                    />
                  </StyledLink>
                );
              })
              .reverse()}
          </List>
        </UlContainer>
      </NotesListContainer>
    );
  }
};

Note.defaultProps = {
  notes: []
};

NotesList.propTypes = {
  notes: PropTypes.array,
  title: PropTypes.string,
  textBody: PropTypes.string,
  _id: PropTypes.string
};
export default NotesList;