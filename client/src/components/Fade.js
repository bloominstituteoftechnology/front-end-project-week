import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Fader = styled.div`
  opacity: ${props => (props.fadeIn ? 1 : 0)};
  transform: ${props => (props.fadeIn ? 'none' : 'translateY(50px)')};
  transition: all 0.3s;
`;

class Fade extends Component {
  state = { in: false, location: this.props.location };

  componentDidMount() {
    setTimeout(() => this.setState({ in: true }), 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ in: false }, () =>
        setTimeout(
          () => this.setState({ in: true, location: this.props.location }),
          300,
        ),
      );
      console.log(this.props.location, prevProps.location);
    }
  }

  render() {
    return (
      <Fader fadeIn={this.state.in}>
        {this.props.children({ location: this.state.location })}
      </Fader>
    );
  }
}

export default withRouter(Fade);
