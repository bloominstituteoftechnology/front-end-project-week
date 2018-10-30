import React from "react";
import "../Styles/index.css";
import GenericForm from "../GenericForm";
import axios from "axios";

class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/api/login", this.state)
      .then(response => {
        localStorage.setItem("jwt", response.data);
        this.props.history.push("/api/notes");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <GenericForm
          type={"login"}
          username={this.state.username}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignIn;
