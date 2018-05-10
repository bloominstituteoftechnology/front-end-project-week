import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// export default class CreateNote extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "",
  //     content: ""
  //   };
  // }
  //   nameChange = (e) => { this.setState({ name: e.target.value }) }
  //   ageChange = (e) => { this.setState({ age: e.target.value }) }
  //   emailChange = (e) => { this.setState({ email: e.target.value }) }

  // inputChange = type => {
  //   return e => {
  //     this.setState({ [type]: e.target.value });
  //   };
  // };

  // buttonSubmitAdd = () => {
  //   const { title, content } = this.state;
  //   this.buttonSubmit({ title, content });
  // };

  // buttonSubmit = note => {
  //   axios
  //     .post("http://localhost:5000/notes", note)
  //     // .then(this.fetchNotes)
  //     .then((response)=> console.log(response))
  //     .then(() => {
  //       this.setState({ title: "", content: "" });
  //     })
  //     .then(() => this.props.history.push("/"));
  // };
  const CreateNote = (props) =>{ 

    const submit = e => {
      e.preventDefault();
      props.buttonSubmitAdd();
      props.history.push("/");
      console.log("props", props);
    }
 
    return (
      <div>
        <h3>Create New Note: </h3>
        {/* <input
          type="text"
          placeholder="title"
          onChange={this.inputChange("title")}
          value={this.state.title}
        />
        <input
          type="text"
          placeholder="Content"
          onChange={this.inputChange("content")}
          value={this.state.content}
        /> */}
        <form>
          <div>
            <input
              type="text"
              placeholder="Title"
              onChange={props.inputChange("title")}
              value={props.title}
            />
          </div>
          <div>
            <textarea
              placeholder="Content"
              onChange={props.inputChange("content")}
              value={props.content}
            />
          </div>
          {/* <Link to="/"> */}
            <button onClick={submit}>Save</button>{" "}
          {/* </Link> */}
        </form>
      </div>
    );
  }

export default CreateNote;
