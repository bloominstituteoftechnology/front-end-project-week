// React and Router
import React from 'react';

// Styling
import { Col } from "reactstrap";
import { BUTTON } from '../StyledComponents';
import './Nav.css';

const Nav = () => {
    return (
        <Col xs='3' className='navigation pt-3'>
          <h3>Lambda Notes</h3>
          <BUTTON to="/" className='my-3 py-2'>View Your Notes</BUTTON>
          <BUTTON to="/create-new-note" className='mt-3 py-2'>+ Create New Note</BUTTON>
        </Col>
    )
}; // end ofNav

export default Nav;