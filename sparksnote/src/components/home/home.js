import React, { Component } from "react";
import { Link } from "react-router-dom"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {
    this.setState({
      notes: this.props.notes
    })
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
              <Link to="/home/{i}" state={this.props.notes[i]} ><div className="home__list__cards">
                <li className="home__list__cards__title">{noteObj.title}</li>
                <li className="home__list__cards__note">{noteObj.note}</li>
              </div></Link>
              )
          })}
        </ul>
      </div>
      )
  }
}

export default Home;