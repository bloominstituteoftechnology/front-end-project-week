import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './styles.css'

const NavSec = styled.div`
    background-color:#D3D2D3;
    width:25%;
    border:1px solid #CECECE;
    padding-left:15px;
    padding-right:15px;
    height:auto;

`
const NavButton = styled.div`
    background-color:#2FB8BC;
    width:100%;
    height:41px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:15px;
    font-size:1.7rem;
`

const Title=styled.p`
    font-size:4rem;
    margin-top 20px;
    font-size:bold;
    margin-bottom:10px;
`


const NavSection = props =>{

    return (
            <NavSec>
                <Title>Lambda Notes</Title>
                <Link className='navButton' to="/"><NavButton><p>View Your Notes</p></NavButton></Link>
                <Link className='navButton' to="/AddNote"><NavButton><p>+ Create New Note</p></NavButton></Link>
            </NavSec>
            )
}
export default NavSection