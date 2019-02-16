import React from "react";
import { Route } from "react-router-dom";


import SideBar from "./components/Sidebar";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import NotePage from "./components/NotePage";
import EditNote from "./components/EditNote";

import "./styles/App.css";

const App = () => {
  
  return (
    <div className="App">
      <SideBar />
      <Route exact path="/" component={Notes} />
      <Route exact path="/create" component={CreateNote} />
      <Route exact path="/notes/:id" render={props => <NotePage {...props} />} />
      <Route
        exact
        path="/note/:id/edit"
        render={props => <EditNote {...props} />}
      />
    </div>
  );
};

export default App;
