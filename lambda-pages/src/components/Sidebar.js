import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const StyledSidebar = styled.div`
  background: #d3d2d3;
  width: 25%;
  min-height: 100vh;
  height: 100%;
  padding: 2rem 1.5rem;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2.5rem;
    span {
      display: block;
    }
  }
`;

const Sidebar = props => {
  return (
    <StyledSidebar>
      <h1>
        Lambda <span>Notes</span>
      </h1>
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
