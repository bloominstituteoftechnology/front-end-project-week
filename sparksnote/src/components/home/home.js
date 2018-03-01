import React, { Component } from "react";
import { Link } from "react-router-dom"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home__header">
          <p>Your Notes:</p>
        </div>
        <ul className="home__list">
          {this.props.notes.map((noteObj, i) => {
            return (
              <div className="home__list__cards">
                <a href="/note"><li className="home__list__cards__title">{noteObj.title}</li>
                <li className="home__list__cards__note">{noteObj.note}</li></a>
              </div>
              )
          })}
        </ul>
      </div>
      )
  }
}

export default Home;
