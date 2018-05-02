import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if(this.props.authenticated){
        this.props.history.push('/');
      }
    }

    render() {
      if(this.props.authenticated) {
        return ( 
          <ComposedComponent />
        )}
        else {
          return (null)
        }
      }
  }

  const mapStateToProps = state => {
    return {
      authed: state.authed
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
