import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addingItem, updatingItem } from "../../actions/index";
import Button_ from "../Button_/Button_";

class Form_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  getNoteData = () => {
    const index = this.props.match.params.index;
    const note = this.props.notes[index];
    const {title} = note;
    const {content} = note
    this.setState({ title, content });
  };
  componentDidMount() {
    const {path} = this.props.match;
    path === "/edit/:index" && this.getNoteData();
  }
  handleInput = e => {
    e.key === "Enter" ? e.preventDefault() : null;
    this.setState({ [e.target.name]: e.target.value });
  };
  newNote = () => {
    const newItem = this.state;
    this.props.addingItem(newItem);
  };
  updateNote = () => {
    const index = this.props.match.params.index;
    const note = this.props.notes[index];
    const id = note.id;
    this.props.updatingItem(index, id, this.state);
  }
 
  render() {
    const button = this.props.match.path === "/edit/:index" ? (
      <Button_ text="Update" action={this.updateNote} />
    ) : (
      <Button_ text="Save" action={this.newNote} />
    );
    return (
      <form className="custom-form">
        <div className="form-group">
          <input
            className="custom-input"
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.handleInput}
            onKeyPress={this.handleInput}
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control custom-text-area"
            name="content"
            rows="13"
            placeholder="Note Content"
            onChange={this.handleInput}
            value={this.state.content}
          />
        </div>
        {button}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.data,
    updated: state.updated_Item,
    added: state.added_Item
  };
};
export default withRouter(
  connect(mapStateToProps, { addingItem, updatingItem })(Form_)
);
