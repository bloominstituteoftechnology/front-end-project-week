import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Notes from './Notes';

import '../css/App.css';


class Home extends Component {
    render() {
      return (
          <div>
              <Notes />
          </div>
      );
    }
  }
  
  export default Home;