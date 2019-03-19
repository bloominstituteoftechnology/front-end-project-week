import React, { Component } from "react";
import "./App.css";
import Sidebar from "./containers/Note/Sidebar";
import { Switch, Route } from "react-router-dom";
// import LoginPage from './containers/Auth/Login'
import NoteList from "./containers/Note/NoteList";
import NotePage from "./containers/Note/NotePage";
import NoteForm from "./containers/Note/NoteForm";
import EditNote from "./containers/Note/NoteEdit";
// import Home from "./containers/Auth/Home"
import Authenticate from "./containers/Auth/Auth"

const App = ( 
class App extends Component {


  render() {
    return (
      <div className="App">
        <Sidebar />

        <Switch>
      
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path="/note" render={props => <NoteList {...props} />} />
         
         
          <Route
            exact
            path="/note/:id"
            render={props => <NotePage {...props} />}
          />
          <Route path="/create" render={props => <NoteForm {...props} />} />
          <Route
            path="/note/:id/edit"
            render={props => <EditNote {...props} />}
            />
        </Switch>
      </div>
    );
  }
}
)

export default Authenticate(App);
