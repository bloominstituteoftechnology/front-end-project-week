import React from "react";
import { Button } from "reactstrap";

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
        <Button>+ Create New Note</Button>
      </div>
    );
  }
}

export default Buttons;
