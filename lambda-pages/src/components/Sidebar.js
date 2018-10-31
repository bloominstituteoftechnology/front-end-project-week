import React from 'react';
import StyledSidebar from '../styles/StyledSidebar';
import Button from '../styles/Button';

const Sidebar = props => {
  const InputFilter = props.InputFilter;
  return (
    <StyledSidebar>
      <h1>
        Lambda <span>Notes</span>
      </h1>
      <InputFilter inputProps={{ placeholder: 'Search notes' }} />
      <Button fullWidth onClick={() => props.history.push('/')}>
        View Your Notes
      </Button>
      <Button fullWidth onClick={() => props.history.push('/create-note')}>
        {window.outerWidth > '800px' ? '+ Create New Note' : '+'}
      </Button>
      <Button fullWidth delete onClick={() => props.history.push('/login')}>
        Log out
      </Button>
    </StyledSidebar>
  );
};

export default Sidebar;
