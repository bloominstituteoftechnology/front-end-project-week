import React from 'react';
import "../App.css";
import { Col, Row, Button } from 'reactstrap';
import { Route } from 'react-router-dom';

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
          +Add New Note
        </Button>
      </Row>

    </div>
    )
}

export default Toolbar;