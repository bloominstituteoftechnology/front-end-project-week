import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <div>
          {this.props.auth ? <ComposedComponent /> : null}
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth.auth
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
