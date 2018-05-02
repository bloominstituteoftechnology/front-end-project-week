import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Notes from './Notes';

class Home extends Component {
    render() {
      return (
          <div>
              <Button><Link to={`/create`}>Create Note</Link></Button>
              <h1> Home </h1>
              <Notes />
          </div>
      );
    }
  }
  
  export default Home;