import React, { Component } from 'react';
import Link from '../Link';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>Lambda Notes</h1>
        <Link href='/' text='View Your Notes' />
        <Link href='/create' text='+ Create New Note' />
      </nav>
    );
  }
}

export default Nav;