import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      button: ""
    };
  }
  render() {
    return (
      <div>
        <h2>Lambda Notes</h2>
        <Button>View Your Notes</Button>
        <Link exact to="/create">
          <Button>+ Create New Note</Button>
        </Link>
      </div>
    );
  }
}

export default Buttons;
