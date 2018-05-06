import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    inputHandler = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
        // console.log(this.state);
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
        username: '',
        password: '',
        }) 
        axios.post('https://polarnotes.herokuapp.com/api/login', this.state)
        .then(response => {
            console.log('response, response.data');
            // this.onProgressCapture.onSignin(response.data);
        })
        .catch(err => {
            console.log('error you are not authorized', err);
        })
    };

    render(){
    return (
        <div>
            <form className="inputForm" onSubmit={this.submitHandler}>
                <input className="inputs" name="username" type="text" required placeholder="username" value={this.state.username} onChange={this.inputHandler}/>
                <input className="inputs" name="password" type="password" required placeholder="password" value={this.state.password} onChange={this.inputHandler} />
                <button className="buttonLogin"> Login </button>
            </form>
            <Link to="/Forgot"><p className="back">Forgot Password?</p></Link>
            <Link to="/"><p className="back">Go Back</p></Link>
        </div>
    )
  }
};


export default Login;