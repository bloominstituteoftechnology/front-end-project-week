import React from 'react';
import { connect } from 'react-redux';

class ViewNote extends React.Component {

  render() {
    return (
      <div>
        <h1> {this.props.note.title} </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.current,
    note: state.note,
  };
};

export default connect(mapStateToProps, {})(ViewNote);