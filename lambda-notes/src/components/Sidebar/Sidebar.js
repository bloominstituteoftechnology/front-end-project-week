import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import { Grid, Col, Row  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate = (nextProps, nextState) => false;


render = () => {
    return (
        <div className="wrapper">
      <div className='sidebar'>
      Sticky sidebar
      <h1>Lambda Notes</h1>
          <button><Link to="/">View Your Notes</Link></button>
          <button><Link to="./Add-Note">+ Create New Note</Link></button>
      </div>
      <div className="main">
         Main content
         </div>
      </div>
    
   
    );
}
}

export default withRouter(Sidebar);