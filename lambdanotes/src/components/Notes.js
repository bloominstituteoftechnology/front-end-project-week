import React from "react";
import { Link } from "react-router-dom";
import dummyData from "./dummydata";
import axios from "axios";

const URL = "http://localhost:9000/api/notes";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    axios
      .get(`${URL}`)
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.response);
    return (
      <div>
        <h3>Your Notes:</h3>
        {this.state.response.map(note => {
          console.log("line33", note);
          return (
            <Link key={note.id} to={`/notes/${note.id}`}>
              <h4>{note.title}</h4>
              <p>{note.body}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Notes;
