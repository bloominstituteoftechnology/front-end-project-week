import React from 'react';
import Sidebar from './Sidebar';

const URL = "http://localhost:3000/"


class CreateNote extends Component {
constructor(props) {
    super(props)
    this.state = {
        note: {
        title: '',
        body: '',
    }
}
}

createNote = e => {
    e.preventDefault();
    const newNote = {
        title: this.state.title,
        body: this.state.body
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
        body: ''
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
            value={this.state.body}
            name="body"
          />
          </div>
    )
}
}

export default EditNote;