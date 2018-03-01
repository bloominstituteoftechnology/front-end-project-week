import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSelected } from "../actions";
import { Link } from "react-router-dom";

class OneNote extends Component {
  state = {
    showModal: true
  };

  render() {
    return (
      <div className="OneNote">
        <div className="header">
          <Link to="">edit</Link>
          <a href="" onClick={this.handleClickOnDeleteLink}>
            delete
          </a>
        </div>
        <h2>{this.props.notes[this.props.id].title}</h2>
        <p>{this.props.notes[this.props.id].text}</p>
        {this.state.showModal && (
          <div>
            <div className="deleteModal">
              <p>Are you sure you want to delete this?</p>
              <div className="buttons">
                <button className='deleteButton'>Delete</button>
                <button className='noButton'>No</button>
              </div>
            </div>
            <div className="background" />
          </div>
        )}
      </div>
    );
  }

  componentWillMount = () => {
    this.props.updateSelected(this.props);
  };

  handleClickOnDeleteLink = () => {
    this.setState({ showModal: !this.state.showModal });
  };
}

const mapPropToStates = state => {
  return {
    notes: state
  };
};

export default connect(mapPropToStates, { updateSelected })(OneNote);

// state.filter(note => {
//   console.log('this.props is', this.props);
//   if (note.id === this.props.id) return note;
// })
