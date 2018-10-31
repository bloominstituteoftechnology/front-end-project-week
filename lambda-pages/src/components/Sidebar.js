import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import Button from '../styles/Button';

const StyledSidebar = styled.div`
  background: #dcdde1;
  width: 25%;
  min-height: 100vh;
  height: 100%;
  padding: 2rem 1.5rem;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    font-size: 5rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.2;
    margin-bottom: 2.5rem;
    span {
      display: block;
    }
  }
`;

const Sidebar = props => {
  const InputFilter = props.InputFilter;
  return (
    <StyledSidebar>
      <h1>
        Lambda <span>Notes</span>
      </h1>
      <InputFilter />
      <Button fullWidth onClick={() => props.history.push('/')}>
        View Your Notes
      </Button>
      <Button fullWidth onClick={() => props.history.push('/create-note')}>
        + Create New Note
      </Button>
    </StyledSidebar>
  );
};

export default Sidebar;
