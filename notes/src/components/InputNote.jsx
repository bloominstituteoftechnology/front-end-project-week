import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "ADD",
      title: "",
      body: "",
      tags: [
       
     ],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      const filtNote = this.props.notes.filter(e => {
        if (e.id === Number(this.props.match.params.id)) {
          return true;
        } else {
          return false;
        }
      });
      if (filtNote[0]) {
        this.setState({
          title: filtNote[0].title,
          body: filtNote[0].body,
          mode: "EDIT"
        });
      }
    }
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      if (this.props.match.params.id) {
        const filtNote = this.props.notes.filter(e => {
          if (e.id === Number(this.props.match.params.id)) {
            return true;
          } else {
            return false;
          }
        });
        if (filtNote[0]) {
          this.setState({
            title: filtNote[0].title,
            body: filtNote[0].body,
            mode: "EDIT"
          });
        }
      }
    }
  }
  submit = e => {
    e.preventDefault();
    this.state.mode === "ADD"
      ? this.props.add({
          body: this.state.body,
          title: this.state.title,
          tags: this.state.tags.map((e)=>{
            return e.text
          })
        })
      : this.props.edit({
          body: this.state.body,
          title: this.state.title,
          id: Number(this.props.match.params.id),
          tags: this.state.tags.map((e)=>{
            return e.text
          })
        });

    this.props.history.push("/");
  };
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }
  render() {
    const { tags } = this.state;

    return (
      <div className="notesViewContainer">
        <div className="viewTitle">
          {this.state.mode === "ADD" ? "Create New" : "Edit"} Note:
        </div>
        <form className="formLayout" id="createNoteForm" onSubmit={this.submit}>
          <input 
          required
            type="text"
            className="notesubmit"
            placeholder={this.state.mode === "ADD" ? "Note Title" : ""}
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <textarea
          required
            className="notesubmit"
            form="createNoteForm"
            name="body"
            placeholder={this.state.mode === "ADD" ? "Note Content" : ""}
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <button className="sidebarButton">
            {this.state.mode === "ADD" ? "Save" : "Update"}
          </button>
          <div className='tagtitle'>Tags:</div>
          <ReactTags
            tags={tags}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            delimiters={delimiters}
            inline
          />
        </form>
      </div>
    );
  }
}

export default CreateNote;
