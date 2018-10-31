import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

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
    transform-origin: bottom;
    transition: all 200ms;
  }

  button {
    cursor: pointer;

    &:hover {
      color: #c23616;
      transform: scaleY(1.2);
    }
  }
`;

const NoteNav = props => {
  return (
    <StyledNoteNav>
      <NavLink to={`/note/${props.id}/edit`}>
        <FontAwesomeIcon icon={faEdit} />
      </NavLink>
      <button onClick={props.toggleModal}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </StyledNoteNav>
  );
};

export default NoteNav;
