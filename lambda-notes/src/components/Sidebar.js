import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const SidebarContainer  =   styled.div`
    background: lightgray;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: solid 1px darkgray;
    min-height: 100vh;
`
const Button = styled.div`
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

    toCreate    =   ()  =>  {
        this.props.history.push("/create");
    }
    toHome  =   ()  =>  {
        this.props.history.push("/");
    }

    render()    {
        return(
            <SidebarContainer>
                <Head>
                    Lambda Notes
                </Head>
                <Button onClick={this.toHome}>View Your Notes</Button>
                <Button onClick={this.toCreate}>+ Create New Note</Button>
            </SidebarContainer>

        );
    }
}

export default withRouter(Sidebar);
