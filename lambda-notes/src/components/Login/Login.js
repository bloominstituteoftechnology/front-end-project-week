import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchingNotesAction, searchAction} from "../../actions";
import styled from 'styled-components';
import ViewNotesContainer from '../ViewNotes/ViewNotesContainer';
import axios from 'axios';

const LoginDiv = styled.div`
	background: linear-gradient(to right,#acb6e5,#86fde8);
        height: 100vh;
`


const Input = styled.input`
        display: block;
	margin: auto auto;
	height: 25px;
	width: 300px;
	margin-bottom: 2%;
	border: 1px solid #acb6e5;
	border-radius: 10px;
	font-size: 13px;
	text-align: center;
	&::placeholder {
        color: #acb6e5;
    	}
	
`

const Header = styled.h2`
	color: #fa7459;
	margin-bottom:4%;
	font-family: 'Roboto', Sans-Serif;
	
`

const Button = styled.button`
        font-family: 'Roboto', Sans-Serif;
	width: 100px;
	height: 25px;
	border-radius: 10px;
	border: 1px solid #acb6e5;
	color:  #acb6e5;
	font-size: 13px;
	margin-right: 2%;
	&:hover {
        background-color: #acb6e5;
	color: white;
        }

`



class Login extends React.Component {

constructor(props){
        super(props);
        this.state= {
		
			username:"",
			password:"",
		
		logged: false
        };

}

componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.setState({logged: true});
        }
    }



changeHandler = event =>{
	this.setState({[event.target.name]: event.target.value});
};


registerHandler =(event) =>{
	event.preventDefault();

	const {username, password} = this.state;
        const user = {username, password};

        axios.post('http://localhost:5000/api/users/register', user)

        .then(res =>{

        const token = res.data;
        localStorage.setItem('token', token);
        this.setState({username: "", password: "", logged: true});
        })

        .catch(err =>{
        console.log("error: couldn't login");

        });

};

loginHandler =(event) =>{
        event.preventDefault();

        const {username, password} = this.state;
        const user = {username, password};

        axios.post('http://localhost:5000/api/users/login', user)

        .then(res =>{

        const token = res.data;
        localStorage.setItem('token', token);
        this.setState({username: "", password: "", logged: true});
        })

        .catch(err =>{
        console.log("error: couldn't login");

        });

};

render() {

        return (
        <LoginDiv>
		{this.state.logged ? (<ViewNotesContainer />):(
		<form>
		<Header>Login</Header>
                <Input type="text" onChange ={this.changeHandler} name="username" placeholder="username"  />
		<Input  type="password" onChange ={this.changeHandler} name="password" placeholder="password"  />
		<Button onClick={(event)=>this.loginHandler(event)}>login</Button>
		<Button onClick={(event)=>this.registerHandler(event)}>register</Button>
		</form>	
                )}
        </LoginDiv>
        );
}
}

const mapStateToProps = state => {
  return {
          notes: state.notes,
          fetching: state.fetchingNotes,
          saving: state.addingNote
  };
};

export default connect(mapStateToProps, {searchAction, fetchingNotesAction})(Login);


