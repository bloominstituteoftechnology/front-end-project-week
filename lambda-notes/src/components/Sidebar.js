import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer  =   styled.div`
    background: lightgray;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: solid 1px darkgray;
    min-height: 100vh;
`
const Button = styled(Link)`
    width: 170px;
    height: 35px;
    margin-top: 10px;
    background: DarkTurquoise;
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bolder;
    color: white;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`
const Head = styled.div`
    width: 170px;
    font-size: 36px;
    font-weight: bolder;
    line-height: 30px;
    margin-top: 10px;
`

class Sidebar extends Component  {
    // constructor(props)  {
    //     super(props);
    // }

    render()    {
        return(
            <SidebarContainer>
                <Head>
                    Lambda Notes
                </Head>
                <Button to={"/"}>View Your Notes</Button>
                <Button to={"/"}>+ Create New Note</Button>
            </SidebarContainer>

        );
    }
}

export default Sidebar;
