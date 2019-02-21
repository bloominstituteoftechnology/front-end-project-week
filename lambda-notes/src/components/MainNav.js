import React , { Component } from 'react';



//compoents
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const MainNavContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const NavButtons = styled.button`
    width: 170px;
    height: 40px;
    color: white;
    margin: 20px 0px 0px 10px;
    background-color:#00ccbe;
    border: 1px solid #004c47;
`

const NavHeader = styled.h3`
    font-size: 40px;
    margin: 20px 0px 0px 10px;
    line-height: 80%;
`

export default class MainNav extends Component {
 
    render() {
        return (
            <MainNavContainer>
                <NavHeader>Lambda Notes</NavHeader>
                <div>
                    <Link to ="/">
                        <NavButtons>View Your Notes</NavButtons>
                    </Link>
                </div>
                    
                <div>
                    <Link to ="/NewNote">
                        <NavButtons>+ Create New Note</NavButtons>
                    </Link>
                </div>
            </MainNavContainer>
        )
    }
}