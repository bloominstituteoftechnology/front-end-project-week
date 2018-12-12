import React, { Component } from 'react';
import axios from "axios";
import "./UpdateNote.css";

export default class UpdateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            textBody: "",
            _id: ""
        }
    }

    updateNote = e => {
        e.preventDefault();
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${this.state._id}`, this.state)
            .then(res => this.props.history.push(`/note/${res.data._id}`))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.selectNote(id);
      }

    selectNote = id => {
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(res => this.setState({title: res.data.title, textBody: res.data.textBody, _id: res.data._id}))
          .catch(err => console.log(err));
        
      }

    changeHandler = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

  render() {
    return (
        <section className="new-note">
            <h2>Edit Note:</h2>
            <form onSubmit={this.updateNote}>
            <input 
                onChange={this.changeHandler}
                type="text" 
                placeholder="Note Title"
                name="title"
                value={this.state.title}
                className="new-title"
                >
            </input>
            <textarea 
                onChange={this.changeHandler}
                type="text" 
                placeholder="Note Content"
                name="textBody"
                value={this.state.textBody}
                className="new-textBody"
                >
            </textarea>
            <div onClick={this.updateNote}>Save Edits</div>
            </form>
        </section>
    )
  }
}