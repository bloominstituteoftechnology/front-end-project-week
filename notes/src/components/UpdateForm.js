import React from 'react'
import axios from 'axios';

class UpdateForm extends React.Component {
  constructor() {
    super()
      this.state ={
        title: '',
        textBody: '',
        _id: ''
      }

  }


  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then(res => this.setState({title: res.data.title, textBody: res.data.textBody, _id: res.data._id}))
      // .then(res => console.log(res.data))
      .catch(err => console.log(err)) }



  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  updateNote = (event) => {
    event.preventDefault()
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${this.state._id}`, this.state)
      .then(res => this.props.history.push(`/note/${this.state._id}`) )
      // .then(res => console.log(res))
      .catch(err => console.log(err))
    console.log('update note button', event.target)
  }

  newNote = () => {
    this.props.createNote(this.state)
    this.setState({title: '', textBody: '', tags: ''})
  }

  render() {
    return (
      <div className='form-container'>
      <div className='form-headline'>
        <h2>Update Note</h2>
      </div >
      <div className="form">
          <p>{this.state._id}</p>
          <form onSubmit={this.updateNote} >
            <input
              onChange={this.handleInputChange}
              placeholder="title"
              value={this.state.title}
              name="title"
            />
            <textarea
              onChange={this.handleInputChange}
              placeholder="write your note here"
              value={this.state.textBody}
              name="textBody"
            />
            <button className="new-note-button" onClick={this.updateNote} type="submit">
            Update Note
            </button>
          </form>
        </div>

      </div>
    );
  }
}


export default UpdateForm;
