import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class LeftColumn extends Component {
  render() {
    return(
        <div className="left-column">
          <h1>Lambda Notes</h1>
          <Link to='/'><button>View Your Notes</button></Link>
          <Link to='/addnote'><button>+ Create New Note</button></Link>
        </div>
    );
  }
}

export default LeftColumn;
