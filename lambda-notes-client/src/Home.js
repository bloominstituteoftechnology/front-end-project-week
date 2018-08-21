import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';


class Home extends Component {

  componentDidMount() {
    this.props.atHomeToggle()
  }

  componentWillUnmount() {
    this.props.atHomeToggle()
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <NavLink to="/notes">Enter</NavLink>
      </div>
    );
  }
}

export default Home;