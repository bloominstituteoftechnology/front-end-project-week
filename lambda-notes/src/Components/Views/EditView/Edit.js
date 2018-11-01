import React, {Component} from 'react'
import axios from 'axios'
import './Edit.css'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            newNote: false,
            note: null
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.setState({
                note: this.props.location.state.note,
                title: this.props.location.state.note.title,
                content: this.props.location.state.note.textBody,
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
            tags: [],
            title: this.state.title,
            textBody: this.state.content,
          }

          if (this.state.note !== null) {
            axios
                .put(`https://fe-notes.herokuapp.com/note/edit/${this.state.note._id}`, newNote)
                 .then(res => {console.log(res)})
                 .catch(err => {console.log(err)})
          }
          
          this.setState({
              newNote: true,
              title: '',
              content: '',
              note: null,
          })
    }

    render() {
        return (
            <div className="edit-container">
                <h2 className="edit-note">Edit Note:</h2>
                <form className="edit-form-container" onSubmit={this.handleSubmit}>
                    <input 
                        defaultValue={
                            this.state.note !== null
                                ? this.state.note.title
                                : this.props.value
                        }
                        onChange={this.handleInputChange}
                        className="edit-title"
                        placeholder="Note Title"
                        type="text"
                        name="title"
                    />
                    <textarea 
                        value={
                            this.state.note !== null
                                ? this.state.note.textBody
                                : this.props.value
                        }
                        onChange={this.handleInputChange}
                        className="edit-content"
                        placeholder="Note Content"
                        type="text"
                        name="content"
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