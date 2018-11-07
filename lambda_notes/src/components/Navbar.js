import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <nav style={{backgroundColor: '#26a69a', position: 'fixed', top: 0,right: 0,
      left: 0,
      zIndex: 500, paddingTop: '1rem', paddingBottom: '1rem', width: '100vw', borderBottom: '3px solid gray'}}>
        <header style={{display: 'flex', justifyContent:'flex-end', color: 'white', fontSize:'1.5rem', marginRight:'20px'}}><Link to="/" style={{color:'white'}}>Lambda Notes</Link></header>
      </nav>
    );
  }
}

export default Navbar;
