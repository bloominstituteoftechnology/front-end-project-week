import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class LeftColumn extends Component {
  render() {
    return(
        <div className="left-column">
          <h1>Lambda Notes</h1>
            <Link to='/'>
              <button>
                Home
              </button>
            </Link>
            <Link to='/addnote'>
              <button>
                + Create New Note
              </button>
            </Link>
          </div>
    );
  }
}

export default LeftColumn;
