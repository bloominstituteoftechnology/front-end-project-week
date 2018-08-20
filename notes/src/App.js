import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Notesview from "./components/Notesview";
import CreateNote from "./components/InputNote";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      nextID: 5,
      mode: 'ADD'
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
          id:3
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
        {/* <Notesview notes={this.state.notes}/> */}
        {/* <CreateNote mode={this.state.mode} /> */}
      </div>
    );
  }
}

export default App;
