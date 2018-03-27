import React, { Component } from "react";
import "./SideMenu.css";
import { Button } from "reactstrap";

class SideMenu extends Component {
  render() {
    return (
      <div className="background">
        <h1 className="lambda">Lambda</h1>
        <h1 className="notes">Notes</h1>
        <Button className="view">View Your Notes</Button>
        <Button className="create">+ Create New Note</Button>
      </div>
    );
  }
}

export default SideMenu;
