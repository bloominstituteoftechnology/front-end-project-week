import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {addingItem} from '../../actions/index';
import Button_ from '../Button_/Button_';

class Form_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }
  

  componentDidMount() {
    const url = this.props.match.url;

  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    return (
      <form className="custom-form" >
        <div className="form-group">
          <input
            className="custom-input"
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.handleInput}
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
        <Button_ text="Save" />
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.data
  };
};
export default withRouter(
  connect(mapStateToProps, { addingItem })(Form_)
);
