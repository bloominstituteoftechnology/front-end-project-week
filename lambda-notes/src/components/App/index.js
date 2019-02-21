import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import SideBar from "../Sidebar";
import NoteList from "../NoteList";
import Form from "../Form";
import Note from "../Note";
import axios from "axios";
import "./styles.css";

const url = `https://fe-notes.herokuapp.com/note`;

class App extends Component {
  // LOGIC FOR RETREIVING NOTES FROM THE SERVER
  getNotes = () => {
    axios
      .get(`${url}/get/all`)
      .then(response => {
        this.setState({ notes: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // LOGIC TO RENDER NOTES AFTER COMPONENT HAS MOUNTED
  componentDidMount() {
    this.getNotes();
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Switch>
          {/* ROUTE TO THE NOTELIST COMPONENT */}
          <Route exact path="/" component={NoteList} />
          {/* ROUTE TO THE FORM COMPONENT */}
          <Route
            path="/note/create"
            render={props => (
              <Form
                {...props}
                type={"new"} // DECLARATION OF NOTE TYPE FOR LATER LOGIC
                title={this.props.title}
                textBody={this.props.textBody}
                getNotes={this.getNotes}
              />
            )}
          />
          {/* ROUTE TO THE NOTE COMPONENT */}
          <Route
            path="/note/:id"
            render={props => <Note {...props} getNotes={this.getNotes} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
