import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNoteNav = styled.nav`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a,
  button {
    color: #000;
    font-weight: bold;
    margin-left: 2rem;
    font-size: 2rem;
    text-decoration: none;
    background: transparent;
    border: none;
  }

  button {
    cursor: pointer;
  }
`;

const NoteNav = props => {
  return (
    <StyledNoteNav>
      <NavLink to={`/note/${props.id}/edit`}>edit</NavLink>
      <button onClick={props.toggleModal}>delete</button>
    </StyledNoteNav>
  );
};

export default NoteNav;
