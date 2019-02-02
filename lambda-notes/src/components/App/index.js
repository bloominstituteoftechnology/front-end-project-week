import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "../Sidebar";
import NoteList from "../NoteList";
import Form from "../Form";
import Note from "../Note";
import axios from "axios";
import "./styles.css"

const url = `https://fe-notes.herokuapp.com/note`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      title: "",
      textBody: ""
    };
  }

  // LOGIC FOR RETREIVING NOTES FROM THE SERVER
  getNotes = () => {
    axios
      .get(`${url}/get/all`)
      .then(response => {
        this.setState(
          {notes: response.data}
        )
      })
      .catch(error => {
        console.log(error)
      })
  };

  // LOGIC TO RENDER NOTES AFTER COMPONENT HAS MOUNTED 
  componentDidMount() {
    this.getNotes();
  };

  // LOGIC FOR RECOGNIZING USER INPUT 
  recognizeInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // LOGIC FOR CREATING A NEW NOTE TO THE SERVER 
  recognizeFormSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }

      axios
        .post(`${url}/create`, newNote)
        .then(response => {
          this.getNotes();
          this.setState({
            title: "",
            textBody: ""
          })
        })
        .catch(error => {
          console.log(error)
        })
  }

  render() {
    return(
        <div className="App">
          <SideBar />

          <Switch>
            {/* ROUTE TO THE NOTELIST COMPONENT */}
            <Route
              exact path="/"
              render={ (props) => <NoteList
              notes={this.state.notes} 
              />}
            />
            {/* ROUTE TO THE FORM COMPONENT */}
            <Route
              path="/note/create"
              render={ (props) => (
                <Form
                  type={"new"} // DECLARATION OF NOTE TYPE FOR LATER LOGIC
                  title={this.state.title}
                  textBody={this.state.textBody}
                  recognizeFormSubmit={this.recognizeFormSubmit}
                  recognizeInputChange={this.recognizeInputChange}
                />
                )}
            />
            {/* ROUTE TO THE NOTE COMPONENT */}
            <Route 
              path="/note/:id" 
              render={ (props) => 
                <Note {...props} 
                getNotes={this.getNotes}
              />} 
              
            />

          </Switch>
      </div>
    );
  }
}

export default App;