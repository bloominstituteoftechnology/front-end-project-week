import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [{ title: "Note One", note: "I like turtles" }, { title: "Note Two", note: "I like doges" }]
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
        <ul>
          {this.state.notes.map(note => {
            return <li>{note.title}: {note.note}</li>
          })}
        </ul>
      </div>
      )
  }
}

export default Home;