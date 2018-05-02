import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <ul>
        {this.props.users.map((user, i) => {
          return <li key={i}>{user.username}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
