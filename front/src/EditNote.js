import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class EditNote extends Component {
  render() {
    return (
      <div class="container">
        <div class="button3">
          <h1>Lambda Notes</h1>
          <button>
            <Link to="Data"> View Your Notes</Link>
          </button>
          <br />
          <button>
            <Link to="CreateNote">+ Create your Notes</Link>
          </button>
        </div>

        <div class="view">
          <a className="don" href="">
            edit
          </a>
          <a className="don" href="#">
            delete
          </a>
          <p>Note Title</p>
          <p>
            The main objective of this week is to develop the MVP feature
            selisted below using react and any other technologies you have
            learned here a Lambda School. There are design files in this
            repository you should use as a creative guide
          </p>
        </div>
      </div>
    );
  }
}
export default EditNote;
