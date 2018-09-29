import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ReactMarkdown = require('react-markdown')

class Ministate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note,
      tag: "",
      tagging: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.note.id !== this.props.note.id) {
        this.setState({note: this.props.note})
    }
  }

  closeModal = () => {
    this.setState({ tagging: !this.state.tagging });
  };

  addTag = id => {
    if (this.state.tag !== "") {
      let note = {...this.state.note, tags: [...this.state.note.tags, {text: this.state.tag}]}
      axios.post(`https://agile-woodland-53059.herokuapp.com/tags/${id}`, {
        tag: this.state.tag,
        noteId: id
      }).then( () => this.setState({ tagging: false, tag: "", note: note})
      )
    }
  };

  deleteTag = (tagdelete) => { 
    let tags = this.state.note.tags.filter(tag => {
      if (tag !== tagdelete) {
        return tag;
      }
    });
    axios.delete(`https://agile-woodland-53059.herokuapp.com/tags/${tagdelete.id}`)
      let note = {...this.state.note, tags: tags}
      // shallow copy, open up note and replace tags with tags
      this.setState({note : note})
  };



  noteInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="note">
        <div className={this.state.tagging ? "tagModal" : "hide"}>
          New Tag
          <input name="tag" onChange={this.noteInput} />
          <button onClick={() => this.addTag(this.state.note.id)}>Add</button>
          <button onClick={this.closeModal}>Cancel</button>
        </div>
        <div className="tags">
          {this.state.note.tags.map(tag => (
            <div className="tag">
              <div className="tagx">
                <p>{tag.text}</p>
                <i
                  onClick={() => this.deleteTag(tag)}
                  class="fas fa-times"
                />
              </div>
            </div>
          ))}
          <div className="fas fa-plus-circle" onClick={this.closeModal}>
            {" "}
            Tag
          </div>
        </div>
        <Link className="notelink" to={`/notes/${this.state.note.id}`}>
          <div>
            <div className="note-contents">
              <p className="note-title">{this.state.note.title}</p>
              <ReactMarkdown className="note-text" source={this.state.note.text}/>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Ministate;
