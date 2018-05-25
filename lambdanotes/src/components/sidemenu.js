import React from 'react';
import './sidemenu.css';
import LambdaButton from './lambdabutton.js';

//This component is visible in all app states.  It displays buttons dynamically.
const SideMenu = (props) => {
  //Build an array of buttons using conditionals.
  let buttonArray = [];

  //If there has been an error, give the user a reload button
  if (props.error) buttonArray.push(<LambdaButton key="0" text="Reload" color="red" myFunc={() => props.fetcher("https://killer-notes.herokuapp.com/note/get/all")} />);

  //If we aren't in the list view, give the user a way to get there.
  if (props.appState !== "list") buttonArray.push(<LambdaButton key="1" text="View Your Notes" color="green" myFunc={props.listMethod} />);

  //If we aren't in the create form, give the user a way to get there.
  if (props.appState !== "create") buttonArray.push(<LambdaButton key="2" text="+ Create New Note" color="green" myFunc={props.createMethod} />);

  //If we are in the list view, give the user options to sort the list.
  if (props.appState === "list") {
    buttonArray.push(<LambdaButton key="3" text="Alphabetize" color="green" myFunc={props.alphabetizeNotes} />);
    buttonArray.push(<LambdaButton key="4" text="Reverse Alphabetize" color="green" myFunc={props.revAlphabetizeNotes} />);
    buttonArray.push(<LambdaButton key="5" text="Sort By Shortest" color="green" myFunc={props.shortestNotes} />);
    buttonArray.push(<LambdaButton key="6" text="Sort By Longest" color="green" myFunc={props.longestNotes} />);
  }

  //Render the generated array.
  return (
    <div className="side-menu">
      <h1 className="lambda-title">Lambda Notes</h1>
      {buttonArray}
    </div>
  );
}

export default SideMenu;
