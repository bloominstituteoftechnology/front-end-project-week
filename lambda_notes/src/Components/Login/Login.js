import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="loginModal"
          centered
        >
          <div className="formDiv">
            <form>
              <h5>Log In:</h5>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button onClick={this.toggle}>Log In</button>
              <hr />
              <p>No Account? Sign Up Below:</p>
              <input type="text" placeholder="Create a Username" />
              <input type="password" placeholder="Create a Password" />
              <input type="password" placeholder="Re-enter Password" />
              <button onClick={this.toggle}>Sign Up</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
