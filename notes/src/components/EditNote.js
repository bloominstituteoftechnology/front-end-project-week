import React from 'react';
import { connect } from 'react-redux';

class EditNote extends React.Component {

  render() {
    return (
      <div>
       Edit note Component
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  } 
}

export default connect(mapStateToProps)(EditNote);