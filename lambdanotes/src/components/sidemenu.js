import React from 'react';
import './sidemenu.css';
import LambdaButton from './lambdabutton.js';

const SideMenu = (props) => {

  let buttonArray = [];

  if (props.error) buttonArray.push(<LambdaButton key="0" text="Reload" color="red" myFunc={() => props.fetcher("https://killer-notes.herokuapp.com/note/get/all")} />);

  if (props.appState !== "list") buttonArray.push(<LambdaButton key="1" text="View Your Notes" color="green" myFunc={props.listMethod} />);

  if (props.appState !== "create") buttonArray.push(<LambdaButton key="2" text="+ Create New Note" color="green" myFunc={props.createMethod} />);

  if (props.appState === "list") {
    buttonArray.push(<LambdaButton key="3" text="Alphabetize" color="green" myFunc={props.alphabetizeNotes} />);
    buttonArray.push(<LambdaButton key="4" text="Sort By Shortest" color="green" myFunc={props.shortestNotes} />);
    buttonArray.push(<LambdaButton key="5" text="Sort By Longest" color="green" myFunc={props.longestNotes} />);
  }

  return (
    <div className="side-menu">
      <h1 className="lambda-title">Lambda Notes</h1>
      {buttonArray}
    </div>
  );
}

export default SideMenu;
