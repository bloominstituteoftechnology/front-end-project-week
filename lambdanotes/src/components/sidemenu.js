import React from 'react';
import './sidemenu.css';
import LambdaButton from './lambdabutton.js';

const SideMenu = (props) => {
  return (
    <div className="side-menu">
      <h1 className="lambda-title">Lambda Notes</h1>
      <LambdaButton text="View Your Notes" />
      <LambdaButton text="+ Create New Note" />
    </div>
  );
}

export default SideMenu;
