import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import NewNote from "./components/NewNote";
import SideBar from "./components/SideBar";
import NoteView from "./components/NoteView";



const App = props => {
  return (
    <div>
        <Route path="/" component={SideBar} />
       <Route path="/note/new" component={NewNote} />
       <Route path="/note/:id" component={NoteView}/>
    </div>
  );
};

export default App;
