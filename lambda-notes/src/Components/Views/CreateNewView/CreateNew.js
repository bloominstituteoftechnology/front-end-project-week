import React, {Component} from 'react'
import axios from 'axios'

class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            newNote: false,
            note: null,
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

    submit = event => {
        event.preventDefault();
          const newNote = {
            tags: [],
            title: this.state.title,
            textBody: this.state.content,
          }
          // if there's a note on state to edit, start PUT
          if (this.state.note === null) {
            axios
                .post('https://fe-notes.herokuapp.com/note/create', newNote)
                .then(res => {console.log(res)})
                .catch(err => console.log(err))
          } else {
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
            <div className='container'>
                <h1>CREATE NEW PAGE</h1>
                <form onSubmit={this.submit}>
                    <input 
                        defaultValue={this.state.note !== null
                                        ? this.state.note.title
                                        : this.props.value}
                        onChange={this.handleInputChange}
                        className="title"
                        placeholder="Note Title"
                        type="text"
                        name="title"
                    />
                    <input 
                        value={this.state.note !== null
                                ? this.state.body
                                : this.props.value}
                        onChange={this.handleInputChange}
                        className="content"
                        placeholder="Note Content"
                        type="text"
                        name="content"
                    />
                    <input 
                        type="submit"
                    />
                </form>
            </div>
        )
    }
}

export default CreateNew



