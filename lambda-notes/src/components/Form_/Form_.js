import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
  handleInput = e => {
    e.key === "Enter" ? e.preventDefault() : null;
    this.setState({ [e.target.name]: e.target.value });
  };
  newNote = () => {
    const newItem = this.state;
    this.props.addingItem(newItem)
  }

  render() {
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
            onKeyPress={this.handleInput}
            value={this.state.content}
          />
        </div>
        <Button_
        text="Save"
        action={this.newNote} />
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.data
  };
};
export default withRouter(connect(mapStateToProps, { addingItem, updatingItem })(Form_));
