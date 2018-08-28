import React, { Component } from "react";
import logo from "./logo.svg";
import { Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Listview from "./components/listview";
import CreateNew from "./components/createnew";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteList: [
        {
          tags: ["test tag", "test tag1"],
          title: "test title",
          textBody: "test body"
        },
        {
          tags: ["test tag 2", "test tag 3"],
          title: "test title 1",
          textBody: "test body 1"
        }
      ],
      tags: [],
      title: "",
      textBody: "",
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newNote = e => {
    e.preventDefault();
    const noteList = [...this.state.noteList, {tags:this.state.tags, title: this.state.title, textBody: this.state.textBody}]
    console.log("!!!",noteList)
     this.setState({
            noteList,
            tags: [],
            title: "",
            textBody: ""
    }) 
  };

  render() {
    return (
      <div className="App">
        <Sidebar />
{/*         <Listview
           tags={this.state.noteList.tags}
          title={this.state.noteList.title}
          textBody={this.state.noteList.textbody}
          noteList={this.state.noteList}
        />  */}
        <Route to='/' render={(props) => <Listview {...props} 
        tags={this.state.noteList.tags}
          title={this.state.noteList.title}
          textBody={this.state.noteList.textbody}
          noteList={this.state.noteList}/>}/>
        
        
        <CreateNew 
        handleInputChange={this.handleInputChange}
        noteList={this.state.noteList}
        newNote={this.newNote}
        textBody={this.state.textBody}
        tags={this.state.tags}
        title={this.state.title} />
      </div>
    );
  }
}

export default App;
