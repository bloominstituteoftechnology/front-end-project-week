import React, {Component} from 'react'
import axios from 'axios'
import './CreateNew.css'

const baseURL = `https://lambda-notes-yusuf-nafey.herokuapp.com`

class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            newNote: false,
            note: null
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.setState({
                note: this.props.location.state.note,
                title: this.props.location.state.note.title,
                body: this.props.location.state.note.body,
            })
        }
        this.setState({ newNote: false })
    }

    handleInputChange = event => {
        event.preventDefault() 
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
          const newNote = {
            title: this.state.title,
            body: this.state.body,
          }

          if (this.state.note === null) {
            axios
                .post('http://localhost:9000/api/notes/create', newNote)
                // .post(`${baseURL}/api/notes/create`, newNote)
                .then(res => {console.log(res)})
                .catch(err => console.log(err))
          }
          
          this.setState({
              newNote: true,
              title: '',
              body: '',
              note: null,
          })
    }

    render() {
        return (
            <div className='create-new-container'>
                <h2 className="create-new-note">Create New Note:</h2>
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <input 
                        defaultValue={this.state.note !== null
                                        ? this.state.note.title
                                        : this.props.value}
                        onChange={this.handleInputChange}
                        className="title-input"
                        placeholder="Note Title"
                        type="text"
                        name="title"
                    />
                    <textarea 
                        value={this.state.note !== null
                                ? this.state.body
                                : this.props.value}
                        onChange={this.handleInputChange}
                        className="content-input"
                        placeholder="Note Content"
                        type="text"
                        name="body"
                    />
                    <input 
                        className="submit-button"
                        type="submit"
                        value="Save"
                    />
                </form>
            </div>
        )
    }
}

export default CreateNew



