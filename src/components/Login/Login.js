
import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import ReactCSSTG from "react-addons-css-transition-group";
//const ReactCSSTG = React.addons.CSSTransitionGroup;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: true
//     }
//     // Bindings
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleRemount = this.handleRemount.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({
//       isVisible: false
//     }, function () {
//       console.log(this.state.isVisible)
//     });
//     return false;
//   }
//   handleRemount(e) {
//     this.setState({
//       isVisible: true
//     }, function () {
//       console.log(this.state.isVisible)
//     });
//     e.preventDefault();
//   }
//   render() {

//     // const for React CSS transition declaration
//     let component = this.state.isVisible ? <Modal onSubmit={this.handleSubmit} key='modal' /> : <ModalBack onClick={this.handleRemount} key='bringitback' />;

//     return <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
//       {component}
//     </ReactCSSTG>
//   }
// }

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
          <Button className="signIn" onClick={this.props.onSubmit}>
            {" "}
            Sign In
          </Button>
        
          <Button className="register-btn" onClick={this.props.onSubmit}>
            {" "}

          <Link to="/register">
            Register
            </Link>

        </Button>
          <Button className= "face" onClick={this.props.onSubmit}>
            <i className="fab fa-facebook" aria-hidden="true" />
          </Button>
          <Button className="tweet" onClick={this.props.onSubmit}>
            <i className="fab fa-twitter" aria-hidden="true" />
          </Button>
        </div>
        <div>
          <a href className="forget password">
            Lost your password?
          </a>
        </div>
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
    return (
      <div className="logo">
        <i className="fa fa-edit fa-spin" />
        <span> Lambda Notes </span>
      </div>
    );
  }
}

// Button to back
class ModalBack extends React.Component {
  render() {
    return (
      <button
        className="bringitback"
        onClick={this.props.onClick}
        key={this.props.className}
      >
        Go back and fix it!
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
        onSubmit={this.handleLoginSubmit}
        handleInputChange={this.handleInputChange}
        key="modal"
      />
    ) : (
        <ModalBack onClick={this.handleRemount} key="bringitback" />
      );

    return (
      <ReactCSSTG
        transitionName="animation"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {component}
      </ReactCSSTG>
    );
  }
}

export default Login;
