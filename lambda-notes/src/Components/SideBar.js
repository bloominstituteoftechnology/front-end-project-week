import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const SideBarContainerStyledDiv = styled.div`
    background-color: #D8D8D8;
    width: 220px;
    padding:10px;
`
const SideBarStyledHeading = styled.h1`
    font-size:36px;
`
const SideBarStyledButton = styled.button`
    background-color: #2BC1C4;
    color: white;
    width: 190px;
    height:45px;
    font-size:16px;
    font-weight:bold;
    margin-bottom:15px;
`

//             loggedIn = {this.state.loggedIn}
//             toggleLoginFormVisibility = {this.toggleLoginFormVisibility}
//             toggleRegisterFormVisibility = {this.toggleRegisterFormVisibility}
//             registerFormVisible = {this.state.registerFormVisible}
//             loginFormVisible = {this.state.loginFormVisible}
//             toggleRegisterAndLoginFormVisibility = {this.toggleRegisterAndLoginFormVisibility}
//             username = {this.state.username}
//             logout={this.logout}
//             login={this.login}

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFormVisible:true,
            registerFormVisible:false,
        }
    }

    componentDidMount() {
        console.log("sidebar cdm")

        console.log('sidebar this.state: ', this.state)
    }

    toggleLoginFormVisibility = () => {
        this.setState(prevState => ({
          loginFormVisible:!prevState.loginFormVisible
        }))
        console.log('loginFormVisible :', this.state.loginFormVisible)
    }

    toggleRegisterFormVisibility = () => {
        this.setState(prevState => ({
            registerFormVisible:!prevState.registerFormVisible
        }))
        console.log('registerFormVisible :', this.state.registerFormVisible)
    }

    toggleRegisterAndLoginFormVisibility = () => {
        this.toggleLoginFormVisibility();
        this.toggleRegisterFormVisibility();
    }
      

    render() {
        return (
            <SideBarContainerStyledDiv>
                <SideBarStyledHeading>
                    Lambda Notes
                </SideBarStyledHeading>
                <br />
                <Link to={"/"}>
                    <SideBarStyledButton> View Your Notes </SideBarStyledButton>
                </Link>
                <br />
                <Link to={"/createNote"}>
                    <SideBarStyledButton> + Create New Note </SideBarStyledButton>
                </Link>
                <br />
    
                <br />
    
                <br />
                <br />
    
                <br />
    
                <br />
               {this.props.loggedIn
                    ?
                        <div>
                            <div>
                                Logged in as: {this.props.username}
                            </div>
                            <Link to={"/"}>
                                <button onClick={this.props.logout}> logout </button>
                            </Link>
                        </div>
                        :
                        <div>
                            {this.state.loginFormVisible
                                ?
                                <Login 
                                    toggleRegisterAndLoginFormVisibility = {this.toggleRegisterAndLoginFormVisibility}
                                    loggedIn = {this.props.loggedIn}
                                    login = {this.props.login}
                                    fetchNoteEntries = {this.props.fetchNoteEntries}
                                />
                                :
                                null
                            }
                            {this.state.registerFormVisible
                                ?
                                <Register 
                                    toggleRegisterAndLoginFormVisibility = {this.toggleRegisterAndLoginFormVisibility}
                                    login = {this.props.login}
                                    fetchNoteEntries = {this.props.fetchNoteEntries}
                                />
                                :
                                null
                            }                    
                        </div>
                }            
                   
            </SideBarContainerStyledDiv>
        )
    }
}
// const SideBar = props => {
    
// }

export default SideBar;