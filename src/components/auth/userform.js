import React, {Component} from 'react';
import styled from 'styled-components';


export default class UserForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.loginOrRegister(this.state)
    }
    
    render(){
        return(
            <UserFormDiv>
                <form onSubmit={this.submit}>
                    <input 
                        required
                        type="text"
                        name="username" 
                        placeholder="username" 
                        onChange={this.inputHandler}
                        value={this.state.username}>{this.value}</input>
                    {/* <input 
                        required
                        type="text"
                        name="email" 
                        placeholder="email" 
                        onChange={this.inputHandler}
                        value={this.state.email}>{this.value}</input> */}
                    <input 
                        required
                        type="password"
                        name="password" 
                        placeholder="password" 
                        onChange={this.inputHandler}
                        value={this.state.password}>{this.value}</input>
                    <input type="submit" />
                </form>
            </UserFormDiv>
        )
    }
}

const UserFormDiv = styled.div`
    ${'' /* border: 1px solid red; */}
    form{
        display: flex;
        flex-direction: column;

    }
`;