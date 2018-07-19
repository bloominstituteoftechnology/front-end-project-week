import React, { Component } from 'react';
import Link from '../Link';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>Notes</h1>
        <Link href='/' text='View' />
        <Link href='/create' text='Create' />
      </nav>
    );
  }
}

export default Nav;