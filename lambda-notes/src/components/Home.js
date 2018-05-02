import React, { Component } from 'react';

import Notes from './Notes';

class Home extends Component {
    render() {
      return (
          <div>
              <h1> Home </h1>
              <Notes />
          </div>
      );
    }
  }
  
  export default Home;