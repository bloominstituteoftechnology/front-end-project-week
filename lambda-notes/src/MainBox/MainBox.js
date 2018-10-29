import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

// import NoteForm from "../components/NoteForm";
// import NavBar from "../components/NavBar";
import ListView from "../components/ListView";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(notes => this.setState({ notes: notes.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="main-box">
        {/* <NavBar />
        <Route path="/note-form" component={NoteForm} />
        <Route
          render={props => <ListView {...props} notes={this.state.notes} />}
        /> */}
        <Route
          render={props => <ListView {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default MainBox;
