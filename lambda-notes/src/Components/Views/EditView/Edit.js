import React, {Component} from 'react'
import axios from 'axios'
import './Edit.css'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            newNote: false,
            note: null,
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios
            .get(`http://localhost:3000/api/notes/${id}`)
            .then(response => this.setState({ note: response.data, title: response.data.title, body: response.data.body }))
            .catch(error => console.log(error))
    }

    // componentDidMount() {
    //     if (this.props.note !== undefined) {
    //         this.setState({
    //             note: this.props.note,
    //             title: this.props.note.title,
    //             body: this.props.note.body,
    //         })
    //     }
    //     this.setState({ newNote: false })
    // }

    handleInputChange = event => {
        event.preventDefault()
        this.setState ({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
          const newNote = {
            title: this.state.title,
            body: this.state.body
          }

          if (this.state.note !== null) {
            axios
                .put(`http://localhost:3000/api/notes/edit/${this.state.note.id}`, newNote)
                .then(res => {console.log(res)})
                .catch(err => {console.log(err)})
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
            <div className="edit-container">
                <h2 className="edit-note">Edit Note:</h2>
                <form className="edit-form-container" onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        className="edit-title"
                        placeholder="Note Title"
                        type="text"
                        name="title"
                    />
                    <textarea 
                        value={this.state.body}
                        onChange={this.handleInputChange}
                        className="edit-content"
                        placeholder="Note Content"
                        type="text"
                        name="body"
                    />
                    <input 
                        className="update-button"
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        )
    }
}

export default Edit