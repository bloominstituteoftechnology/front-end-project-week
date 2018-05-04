import React from 'react';
import axios from 'axios';
import './RegisterUser.css';
import { Form, Input } from 'reactstrap';

const CreateNewRegister = () => {
    return (
        <div className="newRegisterMainDiv">
        <h6 className="newRegisterHeader">Register:</h6>
        <Form className="newRegisterFormDiv">
          <Input type="text" placeholder="Username" className="titleDiv" />
          <Input
            type="password"
            placeholder="Password"
            className="passwordDiv"
          />
          <button className="saveNewRegisterBtn">Register</button>
        </Form>
      </div>
    );
 };

  axios.post('/register', {
    username: 'sophiemullerc',
    password: 'hola123'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
  });
 
 export default CreateNewRegister;