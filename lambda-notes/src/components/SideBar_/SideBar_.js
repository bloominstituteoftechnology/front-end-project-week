import React, { Component } from "react";
import Button_ from '../Button_/Button_';

class SideBar_ extends Component {
  render() {
    return <div className="col-3 side-bar">
      <h1>Lambda Notes</h1>
      <Button_ text="View Your Notes" />
      <Button_ text="+ Create New Note" />
    </div>;
  }
}

export default SideBar_;
