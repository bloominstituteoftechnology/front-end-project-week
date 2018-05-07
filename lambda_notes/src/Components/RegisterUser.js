import React from 'react';
import axios from 'axios';
import './RegisterUser.css';
import { Form, Input } from 'reactstrap';

class RegisterPage extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          user: {
              username: '',
              password: ''
          }
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
  }

  handleSubmit(event) {
      event.preventDefault();

      const { user } = this.state;

      console.log(this.state);

      if (!user.username || !user.password) {
        console.log("UserName and/or Password are empty.")
        return;
      }

      axios.post(
        'https://sophiemullerc-notes.herokuapp.com/register', 
        {
          username: user.username,
          password: user.password
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  render() {
    return (
      <div className="newRegisterMainDiv">
      <h6 className="newRegisterHeader">Register:</h6>
      <Form className="newRegisterFormDiv" onSubmit={this.handleSubmit}>
        <Input 
          type="text" 
          placeholder="Username" 
          className="titleDiv" 
          name="username" 
          onChange={this.handleChange} />
        <Input
          type="password"
          placeholder="Password"
          className="passwordDiv"
          name="password"
          onChange={this.handleChange}
        />
        <button className="saveNewRegisterBtn">Register</button>
      </Form>
    </div>
  );
  }
}

 export default RegisterPage;