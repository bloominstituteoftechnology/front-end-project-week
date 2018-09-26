import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Modalstate extends React.Component {
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
      this.state.note.tags.push(this.state.tag);
      axios.put(`https://localhost:5000/edit/notes/${id}`, {
        tags: this.state.note.tags
      });
      this.setState({ tagging: false, tag: "" });
    }
  };

  deleteTag = (id, tagdelete) => {
    let tags = this.state.note.tags.filter(tag => {
      if (tag !== tagdelete) {
        return tag;
      }
    });
    axios.put(`https://localhost:5000/edit/notes/${id}`, {
        tags: tags
      })
      let note = {...this.state.note, tags: tags}
      // shallow copy, open up note and replace tags with tags
      this.setState({note : note})
  };



  noteInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
      console.log(this.state.note.tags)
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
                <p>{tag}</p>
                <i
                  onClick={() => this.deleteTag(this.state.note.id, tag)}
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
              <p className="note-text">{this.state.note.text}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Modalst;