import React from 'react';
import Sidebar from './Sidebar';

const URL = "http://localhost:3000/"


class CreateNote extends Component {
constructor(props) {
    super(props)
    this.state = {
        note: {
        title: '',
        content: '',
    }
}
}

createNote = e => {
    e.preventDefault();
    const newNote = {
        title: this.state.title,
        content: this.state.content
    };
axios
.post(URL, newNote)
.then(response => {
    console.log("POST RESPONSE", response);
      this.props.handleSetData(response.data);
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({
        title: '',
        content: ''
});
}

handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

render() {
    return (
        <div className="NoteForm">
        <Sidebar />
        <input
            onChange={this.handleInputChange}
            placeholder="Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Content"
            value={this.state.content}
            name="content"
          />
          </div>
    )
}
}

export default EditNote;