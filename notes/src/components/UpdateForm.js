import React from 'react'
import axios from 'axios';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
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

  prepUpdateNote = (event) => {
    event.preventDefault()
    this.props.updateNote(this.state)
    this.setState({title: '', textBody: '', tags: ''})
    this.props.history.push('/')
  }

  newNote = () => {
    this.props.createNote(this.state)
    this.setState({title: '', textBody: '', tags: ''})
  }

  render() {
    return (
      <div className='form-container'>
      <div className='form-headline'>
        <h3>Edit:</h3>
      </div >
      <div className="form">
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
            <div className="form-button">
              <button className="new-note-button" onClick={this.prepUpdateNote} type="submit">
              Update
              </button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}


export default UpdateForm;
