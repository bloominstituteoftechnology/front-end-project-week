import React from 'react';

class Logout extends React.Component {
  render() {
    return <div>You have successfully signed out of Lambda Notes!</div>;
  }

  componentDidMount() {
    this.props.onLogout();
    setTimeout(() => {
      this.props.history.push('/');
    }, 1000);
  }
}

export default Logout;
