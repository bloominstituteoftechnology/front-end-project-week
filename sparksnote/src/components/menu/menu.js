import React, { Component } from "react";

class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="menu">
        <div className="menu__header">
          <h1>SparksNote</h1>
        </div>

        <div className="menu__buttons">
          <div className="menu__buttons--align">
            <p>View Your Notes</p>
          </div>

          <div className="menu__buttons--align">
            <p>+ Create New Note</p>
          </div>

        </div>
      </div>
      )
  }
}

export default Menu;