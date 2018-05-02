import React, { Component } from 'react';
// import axios from 'axios';


class Note extends Component {
  state = {
    note: null,
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    // axios.get('server')
    //   .then(response => {
    //     this.setState({ note: response.data })
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
  render() {
    const { note} = this.state;
    return (
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    );
  }
}

export default Note;