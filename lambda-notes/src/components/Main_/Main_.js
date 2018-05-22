import React from "react";
import { Route, Switch } from "react-router-dom";
import ListView from "../ListView/ListView";
import NoteView from "../NoteView/NoteView";
import Form_ from "../Form_/Form_";

const Main_ = () => {
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
      </Switch>
    </div>
  );
};

export default Main_;
