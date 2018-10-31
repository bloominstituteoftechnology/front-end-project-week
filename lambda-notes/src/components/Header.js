/* Header
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="columns">

          <div className="column">
            <h1>
              <Link to="/">Home</Link>
            </h1>
          </div>


          <div className="column has-text-right">
            <nav>
              <ul>
                <li>
                  <Link to="/notes/new">
                    <button className="button is-primary">New Note</button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>

      </header>
    );
  }
}

export default Header;
