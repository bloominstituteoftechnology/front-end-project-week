import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from "reactstrap";
import './Nav.css';

function Nav() {
    return (
        <Col xs='3' className='nav-side'>
          <h3>Lambda Notes</h3>
          <Link to="/" className='primary-btn'>View Your Notes</Link>
          <Link to="/create-new-note" className='primary-btn'>+Create New Note</Link>
        </Col>
    )
};

export default Nav;