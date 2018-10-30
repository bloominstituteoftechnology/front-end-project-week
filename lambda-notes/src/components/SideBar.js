import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const StyledBar = styled.div `
    height: 100vh;
    width: 220px;
    background: #D3D2D3;
    border-right: 1px solid #AFAFAF;
    padding: 22px 14px;
    box-sizing:border-box;
    position:fixed;
    h1{
        font-size: 36px;
        font-weight: bold;
        line-height:.8;
    }

`

const SideBar = () =>{
    return (
        <StyledBar>
            <h1>
            Lambda Notes</h1>
            <NavLink to='/'>
            <div className='button'>View Your Notes</div>
            </NavLink>
            <NavLink to='/create'>
            <div className='button'>+ Create New Note</div>
            </NavLink>

        </StyledBar>
    )
}

export default SideBar