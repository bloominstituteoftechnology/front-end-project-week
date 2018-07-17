import React from "react";
import "bulma/css/bulma.css";
import HeadingTitle from "../common/Titles/HeadingTitle";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";
import { Link } from "react-router-dom";
class CreateNoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  postNote = () => {
    const noteObj = {
      title: this.state.title,
      textBody: this.state.body,
      tags: [],
    };
    console.log('postNote')
    this.props.postNote(noteObj);
    this.setState({ title: '', body: ''});
  }
  render() {
    return (
      <div>
        <HeadingTitle>Create new note:</HeadingTitle>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="field">
            <div className="control">
              <input
                className="input is-large"
                type="text"
                name="title"
                value = {this.state.title}
                placeholder="Note Title"
                onChange = {this.changeHandler}
              />
            </div>
          </div>
          <div className="field">
            <textarea
              className="textarea"
              name="body"
              value = {this.state.body}
              placeholder="Note Content"
              rows="10"
              onChange = {this.changeHandler}
            />
          </div>
          <Link to="/">
            <GeneralBtn width="15rem" onClick={this.postNote}>Save</GeneralBtn>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateNoteComponent;
