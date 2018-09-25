import React, {Component} from 'react';
import styled from 'styled-components';
import { 
   Link, Route
    } from 'react-router-dom';

import Login from './login';
import Register from './register';
import Header from './header';
import { connect } from 'react-redux';

import {
    createUser,
    } from '../../actions';

class Welcome extends Component{

    componentDidMount(){
        //check if token had previously existed then route to login automatically 
        console.log(this.props)
    }

    createUser = (newUser) => {
        console.log('createuser in welcome.js', this)
        this.props.createUser(newUser);
        this.props.history.push('/all-notes')

    }
    
    render(props){
        console.log(this.props)
        return(
            <WelcomeDiv>
                <Route path="/" component={Header} />
                <Route path="/welcome/login" component={Login} />
                <Route path="/welcome/register" render={() => {
                    return <Register createUser={this.createUser} />}} />
            </WelcomeDiv>
        )
    }
}

const mapStateToProps = store => {
    return {state: store};//state is really props & store is store
  }
  
  const mapDispatchToProps = {
    createUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)

const WelcomeDiv = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    .links{
        width: 100%;
        height: 40px;
        border: 1px solid green;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    Link{
        padding: 10px;
    }
`;