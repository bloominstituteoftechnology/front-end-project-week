import React from "react";
import NoteList from "./NoteList";
import { Route } from "react-router";
import NoteView from "./NoteView";
import Fourm from "./Fourm";
import "./maincontent.css";

const MainContent = () => {
  return (
    <>
      <div className="main-content-container">
        <Route exact path="/" component={NoteList} />
        <Route path="/noteview" component={NoteView} />
        <Route path="/fourm" component={Fourm} />
      </div>
    </>
  );
};

export default MainContent;
