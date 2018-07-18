import React from "react";
import HeadingTitle from "../common/Titles/HeadingTitle";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";
import { Link } from "react-router-dom";
class EditNoteComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }
  componentDidMount() {
      const id = this.props.match.params.id;
      this.props.fetchNote(id);
      this.setState({ title: this.props.title, textBody: this.props.textBody });
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  updateNote = (id) => {
    const noteObj = {
      tags: [],
      title: this.state.title,
      textBody: this.state.textBody
    }
    this.props.updateNote(id, noteObj);
    this.props.fetchNote(id);
  }
  render() {
    const id = this.props.match.params.id;

    return (
      <div>
        <HeadingTitle>Edit Note:</HeadingTitle>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="field is-horizontal">
            <div className="control">
              <input
                className="input is-large"
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Note Title"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="field">
            <textarea
              className="textarea"
              name="textBody"
              value={this.state.textBody}
              placeholder="Note Content"
              rows="10"
              onChange={this.changeHandler}
            />
          </div>
          <Link to={`/note/get/${id}`}>
            <GeneralBtn width="15rem" onClick = {() => {
                this.updateNote(id);
              }}>
              Update
            </GeneralBtn>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditNoteComponent;
