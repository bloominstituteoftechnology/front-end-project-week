import React from "react";
import "./App.css";

import { SideMenu } from "./components/";
import DisplayNotesView from "./viewer/DisplayNotesView";


const App = () => {
  
    return (
      <div className="App">
        <SideMenu />
        <DisplayNotesView />
        
      </div>
    );
}

export default App;
