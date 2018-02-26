import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainContent extends Component {
  render() {
    return (
      <div className="col-md-10" >
          
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(MainContent);
