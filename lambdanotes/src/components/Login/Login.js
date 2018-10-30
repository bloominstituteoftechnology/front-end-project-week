import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Login.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

// Modal
class Modal extends React.Component {
  render() {
    return (
      <div className="Modal">
        <Logo />
        <form onSubmit={this.props.onSubmit}>
          <Input
            type="text"
            name="username"
            handleInputChange={this.props.handleInputChange}
            placeholder="username"
          />
          <Input
            type="password"
            name="password"
            handleInputChange={this.props.handleInputChange}
            placeholder="password"
          />
          </form>
          <div className="social-signin">
          <button className="signIn" onClick={this.props.onSubmit}>
            {" "}
            Sign In
          </button>
        
        <div className="social-signin">
          <Button className="fb" onClick={this.props.onSubmit}>
            <i className="fab fa-facebook" aria-hidden="true" />
          </Button>
          <Button className="tw" onClick={this.props.onSubmit}>
            <i className="fab fa-twitter" aria-hidden="true" />
          </Button>
        </div>
        </div>
        <a href="forget password">Lost your password ?</a>
      </div>
    );
  }
}

// Generic input field
class Input extends React.Component {
  render() {
    return (
      <div className="Input">
        <input
          onChange={this.props.handleInputChange}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          required
          autoComplete="false"
        />
        <label name={this.props.name} />
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    return <div className="logo">
        <i class="fa fa-edit fa-spin" />
        <span> Lambda Notes </span>
      </div>;
  }
}

// Button to brind the modal back
class ModalBack extends React.Component {
  render() {
    return (
      <button
        className="bringitback"
        onClick={this.props.onClick}
        key={this.props.className}
      >
        Brind the modal back !
      </button>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    // const for React CSS transition declaration
    let component = this.state.isVisible ? (
      <Modal
        handleInputChange={this.handleInputChange}
        onSubmit={this.handleLoginSubmit}
        key="modal"
      />
    ) : (
      <ModalBack onClick={this.handleRemount} key="bringitback" />
    );

    return (
      <ReactCSSTransitionGroup
        transitionName="animation"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {component}
      </ReactCSSTransitionGroup>
    );
  //   return (
  //     <Form className="login-form">
  //       <h3>Welcome to My Notes</h3>
  //       <div>Please Login</div>
  //       <FormGroup>
  //         <Input
  //           type="text"
  //           placeholder="User Name"
  //           name="username"
  //           value={this.state.username}
  //           onChange={this.handleInputChange}
  //         />
  //       </FormGroup>
  //       <FormGroup>
  //         <Input
  //           type="password"
  //           placeholder="Password"
  //           name="password"
  //           value={this.state.password}
  //           onChange={this.handleInputChange}
  //         />
  //         <br />
  //         <div className="lbutton">
  //           <Button size="lg" color="primary" onClick={this.handleLoginSubmit}>
  //             Log In
  //           </Button>
  //         </div>
  //       </FormGroup>
  //     </Form>
  //   );
  // }
}
}

export default Login;
