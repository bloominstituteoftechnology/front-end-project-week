import React from 'react';
import '../App.css';
import axios from 'axios';

class Note extends React.Component {
  state = {
    isEditing: false,
    note: null,
    title: "",
    textBody: ""
  }

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${this.id}`)
      .then(response => {
        this.setState({ note: response.data,
                        title: response.data.title,
                        textBody: response.data.textBody });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (!this.state.note) {
      return (
        <div>Note is loading...</div>
      )
    }

    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.textBody}</div>
      </div>
    )
  }
}

Note.defaultProps = {
  title: "",
  textBody: ""
}

export default Note;
