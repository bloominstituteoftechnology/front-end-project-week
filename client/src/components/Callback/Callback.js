import { Component } from 'react';
import { setIdToken, setAccessToken } from '../../utils/AuthService';

class Callback extends Component {
// eslint-disable-next-line
  constructor() {
    super()
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/";
  }

  render() {
    return null;
  }
}

export default Callback;
