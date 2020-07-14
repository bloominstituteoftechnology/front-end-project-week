import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';

const H1 = styled.h1`
    max-width: 200px;
    font-size: 3rem;
    color: #3C3C3C;
`;
const CustomButton = styled.button`
    background: #2AB4AE;
    color: white;
    width: 250px;
    margin: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    border-radius: 100px;
    border: none;
`;

class SideBar extends React.Component {
    constructor(props){
        super(props);
    }
    logout = e => {
        if ( localStorage.getItem('email')){
            e.preventDefault();
            localStorage.removeItem('email');
            window.location.href='http://localhost:3000/auth/login';
        } else {
            alert ('No user is currently logged in.');
        }
    };
    render(){
        return(
            <Container fluid={true} style={{
                                    width: '25%',
                                    border: '1px solid lightgray',
                                    background:' #D2D2D2',
                                    padding: '1rem'}}>
                <Link to="/note/all" style={{ textDecoration: 'none' }}>
                    <H1>Lambda Notes</H1>
                </Link>
                <Link to="/auth/register" style={{ textDecoration: 'none' }}>
                    <CustomButton onClick={this.props.reset}>Register</CustomButton>
                </Link>
                <Link to="/auth/login" style={{ textDecoration: 'none' }}>
                    <CustomButton onClick={this.props.reset}>Login</CustomButton>
                </Link>
                <Link to="/auth/login" style={{ textDecoration: 'none' }}>
                    <CustomButton onClick={this.logout}>Logout</CustomButton>
                </Link>
                <Link to="/note/all" style={{ textDecoration: 'none' }}>
                    <CustomButton onClick={this.props.reset}>View Your Notes</CustomButton>
                </Link>
                <Link to="/note/create" style={{ textDecoration: 'none' }}>
                    <CustomButton>+ Create New Note</CustomButton>
                </Link>
            </Container>
        );
    }
}

export default SideBar;