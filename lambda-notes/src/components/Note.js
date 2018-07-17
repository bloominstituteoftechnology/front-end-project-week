import React, { Component } from "react";
import axios from "axios";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then(res => {
        this.setState({
          note: res.data,
          title: res.data.title,
          textBody: res.data.textBody
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="note">
        <div className="editdeletebuttons">
          <a onClick={this.editNote}>edit</a>
          <a>delete</a>
        </div>
        <h3 className="">{this.state.title}</h3>
        <div>
          <div className="">{this.state.textBody}</div>
        </div>
      </div>
    );
  }
}

export default Note;
