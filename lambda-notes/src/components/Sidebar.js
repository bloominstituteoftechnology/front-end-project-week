import React from 'react';
import StyledSidebar from '../styles/StyledSidebar';
import Button from '../styles/Button';

const Sidebar = props => {
  const InputFilter = props.InputFilter;
  return (
    <StyledSidebar>
      <h1>
        Lambda{' '}
        <span style={{ color: '#000000' }}>
          Notes{' '}
          {/* <FontAwesomeIcon
            style={{ 'font-size': '2.5rem' }}
            icon={faStickyNote}
          /> */}
        </span>
      </h1>
      <Button fullWidth onClick={() => props.history.push('/')}>
        View Your Notes
      </Button>
      <Button fullWidth onClick={() => props.history.push('/create-note')}>
        Create New Notes
      </Button>
      <InputFilter inputProps={{ placeholder: 'Search notes' }} />
      <Button style={{"background":"#24B8BD"}} fullWidth delete onClick={() => props.history.push('/login')}>
        Log out
      </Button>
    </StyledSidebar>
  );
};

export default Sidebar;
