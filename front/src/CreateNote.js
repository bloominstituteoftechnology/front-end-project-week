import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleChange = event => {
    this.setState({ body: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const addNote = {
      title: this.state.title,
      body: this.state.body
    };
    axios
      .post("https://backend-project-week.herokuapp.com/api/notes", {
        title: this.state.title,
        body: this.state.body
      })
      .then(response => {
        console.log(response, " note saved");
      })
      .catch(err => {
        console.log(err, "sorry, note not saved, try again ");
      });
    
      this.setState({
      notes:[...this.state.notes,({title: this.state.title, body: this.state.body})],
      title: "",
      body: ""
    });
  };
 
    

  render() {
    return (
      <div className="container">
        <div className="button3">
          <h1>Lambda Notes</h1>
          <button>
            {" "}
            <Link to="Data"> View Your Notes</Link>
          </button>
          <br />
          <button>
            {" "}
            <Link to="CreateNote"> + Create Your Notes</Link>
          </button>
        </div>

        <form>
          <h2>Create New Notes:</h2>
          <input
            class="kin"
            type="text"
            placeholder="Enter your title"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
          <br />
          <textarea
            value={this.state.body}
            placeholder="Enter your notes"
            onChange={this.handleChange}
            cols={60}
            rows={30}
          />
          <button onClick={this.handleSubmit}>Save </button>
        </form>
      </div>
    );
  }
}
export default CreateNote;
