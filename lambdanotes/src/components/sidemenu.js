import React from 'react';
import './sidemenu.css';
import LambdaButton from './lambdabutton.js';

const SideMenu = (props) => {
  return (
    <div className="side-menu">
      <h1 className="lambda-title">Lambda Notes</h1>
      <LambdaButton text="View Your Notes" color="green" myFunc={props.listMethod} />
      <LambdaButton text="+ Create New Note" color="green" myFunc={props.createMethod} />
      <LambdaButton text="Alphabetize Notes" color="green" myFunc={props.alphabetizeNotes} />
    </div>
  );
}

export default SideMenu;
