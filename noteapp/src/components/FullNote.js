import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FullNote extends Component {
  state = {
    note: {}
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
  }
  render() {
    const { id, title, text } = this.state.note;
    return (
      <div>
        <div>edit</div>
        <div>delete</div>
        <div>{title}</div>
        <div>{text}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.notes
  };
};

export default connect(mapStateToProps)(FullNote);
