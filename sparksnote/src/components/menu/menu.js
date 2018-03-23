import React, { Component, Link } from "react";

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
          <a href="/" className="menu__buttons__links"><div className="menu__buttons--align">
            <p className="menu__buttons__text" >View Your Notes</p>
          </div></a>

          <a href="/newnote" className="menu__buttons__links"><div className="menu__buttons--align">
            <p className="menu__buttons__text">+ Create New Note</p>
          </div></a>

        </div>
      </div>
      )
  }
}

export default Menu;