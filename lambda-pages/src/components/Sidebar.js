import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import StyledSidebar from '../styles/StyledSidebar';
import Button from '../styles/Button';

const Sidebar = props => {
  const InputFilter = props.InputFilter;
  return (
    <StyledSidebar>
      <h1>
        Lambda{' '}
        <span style={{ color: '#00a8ff' }}>
          Notes{' '}
          {/* <FontAwesomeIcon
            style={{ 'font-size': '2.5rem' }}
            icon={faStickyNote}
          /> */}
        </span>
      </h1>
      <InputFilter inputProps={{ placeholder: 'Search notes' }} />
      <Button fullWidth onClick={() => props.history.push('/')}>
        View All
      </Button>
      <Button fullWidth onClick={() => props.history.push('/create-note')}>
        <FontAwesomeIcon icon={faPlus} /> Add Note
      </Button>
      <Button fullWidth delete onClick={() => props.history.push('/login')}>
        Log out
      </Button>
    </StyledSidebar>
  );
};

export default Sidebar;
// F