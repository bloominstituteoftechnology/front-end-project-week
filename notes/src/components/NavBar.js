import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
    background-color:aqua;
    padding: 10px;
    color:white;
    font-size: 15px;
    margin-top:10px;
    width:100%;
`;

const Header = styled.h1`
    font-size: 40px;
`;

class NavBar extends Component{
    render(){
        return(
            <div className='leftSide'>
                <Header>Lambda <br /> Notes</Header>
               
                <Link to ='/'><Button>View Your Notes</Button></Link> 
                <Link to ='/create-note'><Button>+ Create New Note</Button></Link> 
               
            </div>
        )
    }
}
export default NavBar; 