import React from 'react';
import "../App.css";
import { Col, Row, Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import CreateNote from './CreateNote';

const Toolbar = props => {
  return(
    <div className='Toolbar-container'>
      <h1>Lambda NoteTaker</h1>
      <Row>
        <Button>
          View Your Notes
        </Button>
      </Row>
      <Row>
        <Button>
          <Link to="/add" component={CreateNote}>+Add New Note</Link>
        </Button>
      </Row>

    </div>
    )
}

export default Toolbar;