import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";


const ListView = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create" component={Create} />
  </Switch>
);

const Home = () => (
  <div className="home">
    <h1>Notes to display</h1>
    <p> Blah Blah blah Notes</p>
  </div>
);

const Create = () => (
  <div className="create">
    <h1>Create New Note:</h1>
    <p>
      title
    </p>
    <p>
     content
    </p>
  </div>
);

 


export default ListView;