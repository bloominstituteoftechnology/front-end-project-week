import React from "react";
import '../Styles.css';
import { Button, Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';


const MenuBar = () => {
  return (
    <div className='APP__MENUBAR'>
      <h1>Lambda<br/>Notes</h1>
        <button className='APP__MENUBUTTON'>
          View Your Notes
        </button>
        <button className='APP__MENUBUTTON'>
          + Create New Note
        </button>
    </div>
  );
};

export default MenuBar;