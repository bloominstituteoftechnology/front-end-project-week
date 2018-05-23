import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import ListView from "../ListView/ListView";
import NoteView from "../NoteView/NoteView";
import Form_ from "../Form_/Form_";
import Button_ from '../Button_/Button_';

const Main_ = () => {
  const Page404 = <div><br/><h5>Something went wrong,</h5><br/><p>the page you are looking for is no here...</p><br/><Link to="/" ><Button_ text="View my notes" /></Link></div>;
  return (
    <div className="col-9 custom-main">
      <Switch>
        <Route
          exact
          path="/"
          component={() => <h5 className="text-capitalize">Your Notes:</h5>}
        />
        <Route
          path="/note/:id"
          component={() => <h5 className="text-capitalize">Note Name</h5>}
        />
        <Route
          path="/edit/:id"
          component={() => <h5 className="text-capitalize">Edit Note:</h5>}
        />
        <Route
          path="/new"
          component={() => <h5 className="text-capitalize">Create new note</h5>}
        />
        <Route component={() => <h1 className="text-capitalize">Oops!</h1>} />
      </Switch>
      <Switch>
        <Route exact path="/" component={ListView} />
        <Route path="/note/:id" component={NoteView} />
        <Route
          path="/edit/:id"
          render={props => <Form_ {...props} type="editNote" />}
        />
        <Route
          path="/new"
          render={props => <Form_ {...props} type="newNote" />}
        />
        <Route component={() => Page404 } />
      </Switch>
    </div>
  );
};

export default Main_;
