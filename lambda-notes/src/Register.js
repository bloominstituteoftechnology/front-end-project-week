import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Fade } from 'reactstrap';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }       
    
    state = { fadeIn: false };

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
        axios.post('https://polarnotes.herokuapp.com/api/register', this.state)
        .then(response => {
            console.log('response, response.data');
            // this.onProgressCapture.onSignin(response.data);
        })
        .catch(err => {
            console.log('registration error', err);
        })        
    };

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
      }

    render(){
    return (
        <div>
            <form className="inputForm" onSubmit={this.submitHandler} ref="form" >
                <input className="inputs" name="username" type="text" required placeholder="username" value={this.state.username} onChange={this.inputHandler} />
                <input className="inputs" name="password" type="password" required placeholder="password" value={this.state.password} onChange={this.inputHandler} />                
                <button onClick={this.toggle} className="buttonRegister" type="submit"> Register </button>
                <Fade in={this.state.fadeIn} tag="h6" className="faded mt-2">
                    Thank You For Registering!
                </Fade>
            </form>
            <Link to="/"><p className="back">Go Back</p></Link>
        </div>
    )
  }
};


export default Register;