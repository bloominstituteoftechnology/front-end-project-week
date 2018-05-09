import React from 'react';
import "../App.css";
import { Col, Row, Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import CreateNote from './CreateNote';

const Toolbar = props => {
  return(
    <div className='Toolbar-container'>
      <h3>Lambda Notes</h3>
        <p></p>
          <Link to='/'>
            <Button className='' color='primary'>
              View Your Notes
            </Button>
          </Link>
        <p></p>
          <Link to='/add'>
            <Button color='primary'>
              +Add New Note
            </Button>
          </Link>
    </div>
    )
}

export default Toolbar;