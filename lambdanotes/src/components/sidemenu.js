import React from 'react';
import './sidemenu.css';
import LambdaButton from './lambdabutton.js';

const SideMenu = (props) => {

  let buttonArray = [];

  if (props.appState !== "list") buttonArray.push(<LambdaButton text="View Your Notes" color="green" myFunc={props.listMethod} />);

  if (props.appState !== "create") buttonArray.push(<LambdaButton text="+ Create New Note" color="green" myFunc={props.createMethod} />);

  if (props.appState === "list") buttonArray.push(<LambdaButton text="Alphabetize Notes" color="green" myFunc={props.alphabetizeNotes} />);

  return (
    <div className="side-menu">
      <h1 className="lambda-title">Lambda Notes</h1>
      {buttonArray}
    </div>
  );
}

export default SideMenu;
