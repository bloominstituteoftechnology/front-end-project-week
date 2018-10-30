import React, { Component } from 'react';
import axios from 'axios';

export default class EditNote extends Component {
  state = {
    title: '',
    textBody: '',
    id: this.props.match.params.id,
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      ...this.props.location.state,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveEdit = (event) => {
    event.preventDefault();
    const { title, textBody } = this.state;
    const editedNote = { title, textBody };
    if (this.state.title.length > 0 && this.state.textBody.length > 0) {
      axios
        .put(
          `https://fe-notes.herokuapp.com/note/edit/${this.state.id}`,
          editedNote
        )
        .then(() => {
          this.fetchData(this.state.id);
          this.props.history.push(`/note/${this.state.id}`);
        })
        .catch((error) => console.error(error));
    }
  };

  fetchData = (id) => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    console.log(this.state.id);
    // const { title, textBody } = this.state.note;
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <textarea
            name="textBody"
            onChange={this.handleChange}
            value={this.state.textBody}
          />
          <button onClick={this.saveEdit}>Save</button>
        </form>
      </div>
    );
  }
}
