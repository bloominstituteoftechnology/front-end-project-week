import React from 'react';
import axios from 'axios';

export default class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      _id: ''
    }
  }

  update = event => {
    event.preventDefault();
    axios 
      .put(`https://fe-notes.herokuapp.com/note/edit/${this.state._id}`, this.state)
      .then( response => this.props.history.push(`/get/${response.data._id}`))
      //.then( () => this.props.history.push('/'))
      .catch( error => console.log(error))
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.selected(id);
  }

  selected = id => {
    axios 
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then( response => this.setState({ title: response.data.title, textBody: response.data.textBody, _id: response.data._id}))
      .catch( error => console.log( error))
    }

    handleInputChange = event => {
      this.setState({ [event.target.name]: event.target.value})

    }
    render() {
      return (
        <div>
          <form onSubmit={this.update}>
          <h3>Edit Note:</h3>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
            type="text"
          />
          <textarea 
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
            type="text"
          />
        <button type="submit">Update</button>
        </form>
        </div>
      )
    }

}