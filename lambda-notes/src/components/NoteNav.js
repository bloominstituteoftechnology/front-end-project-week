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
    font-size: 1.5rem;
    text-decoration: none;
    background: transparent;
    border: none;
    transform-origin: bottom;
    transition: all 200ms;

    &:hover {
        color: #24B8BD;
      transform: scaleY(1.1);
    }
  }

  button {
    cursor: pointer;
    font-size: 1.5rem;
    &:hover {
      color: #24B8BD;
      transform: scaleY(1.1);
    }
  }
`;

const NoteNav = props => {
  return (
    <StyledNoteNav>
      <NavLink to={`/note/${props.id}/edit`}>
        <button>EDIT</button>
      </NavLink>
      <button onClick={props.toggleModal}>
        DELETE
      </button>
    </StyledNoteNav>
  );
};

export default NoteNav;
