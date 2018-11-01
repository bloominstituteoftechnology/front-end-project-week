import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faEdit, faTrash)


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
        <button><FontAwesomeIcon icon={faEdit}/></button>
      </NavLink>
      <button onClick={props.toggleModal}>
        <FontAwesomeIcon icon={faTrash}/>
      </button>
    </StyledNoteNav>
  );
};

export default NoteNav;
