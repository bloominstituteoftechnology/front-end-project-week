import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Notesview from "./components/Notesview";
import CreateNote from "./components/InputNote";
import SingleNote from "./components/SingleNote";
import { Route,Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{ title: "", body: "" }],
      nextID: 5,
      mode: "ADD"
    };
  }
  componentDidMount = () => {
    this.setState({
      notes: [
        {
          title: "test",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 0
        },
        {
          title: "test2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 1
        },
        {
          title: "test3",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 2
        },
        {
          title: "test4",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 3
        },
        {
          title: "test5",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 4
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Switch>
        <Route exact
          path="/"
          render={props => <Notesview {...props} notes={this.state.notes} />}
        />
        <Route exact
          path="/input"
          render={props => <CreateNote {...props} mode={this.state.mode} />}
        />
        <Route exact
          path="/input/:id"
          render={props => <CreateNote {...props} notes={this.state.notes} />}
        />
        <Route exact
          path="/:id"
          render={props => <SingleNote {...props}notes={this.state.notes} />}
        />
        </Switch>
        {/* <Notesview notes={this.state.notes}/> */}
        {/* <CreateNote mode={this.state.mode} /> */}
        {/* <SingleNote title={this.state.notes[0].title} body={this.state.notes[0].body} /> */}
      </div>
    );
  }
}

export default App;
