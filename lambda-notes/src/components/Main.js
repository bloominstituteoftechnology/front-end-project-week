import React from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "./Notes";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Notes} />
      </Switch>
    </main>
  );
};

export default Main;
