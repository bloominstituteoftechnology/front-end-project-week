import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import SView from "./components/SView";
import MainView from "./components/MainView";
import EditNote from "./components/EditNote";
import NewNote from "./components/NewNote";
import SideBar from "./components/SideBar";

//LeftSide

//RightSide

//SplitScreen

//Home

//New

//View

//Edit

//Delete

//MainView Right

const App = props => {
  return (
    <div>
      <Route exact path="/" component={SideBar} />
      <Route path="/notes/new" component={NewNote} />
      <Route path="/notes/edit" component={EditNote} />
    </div>
  );
};

export default App;
