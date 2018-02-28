import React, { Component } from "react";

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
        <ul className="home__list">
          {this.props.notes.map(noteObj => {
            return (
              <div className="home__list__cards">
                <li className="home__list__cards__title">{noteObj.title}</li>
                <li className="home__list__cards__note">{noteObj.note}</li>
              </div>
              )
          })}
        </ul>
      </div>
      )
  }
}

export default Home;