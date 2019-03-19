import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

class SignInWidget extends Component {
  componentDidMount() {
    console.log(this.props.baseUrl)
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      // idps:[{ type: 'GOOGLE', id: '0oab6xloaFX564Yvm356' }]

    });
   ;

    this.widget.renderEl({ el },
      this.props.onSuccess,
      this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
};

export default SignInWidget;