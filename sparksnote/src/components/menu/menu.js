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
          <p>Sparks Note</p>
        </div>

        <div className="menu__buttons">
          <div className="menu__buttons--align">
            <p className="menu__buttons__text">View Your Notes</p>
          </div>

          <div className="menu__buttons--align">
            <p className="menu__buttons__text">+ Create New Note</p>
          </div>

        </div>
      </div>
      )
  }
}

export default Menu;