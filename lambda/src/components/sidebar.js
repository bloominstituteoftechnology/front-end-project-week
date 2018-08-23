import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
color: #2F4F4F;
`

 const Bar = styled.div`
  
    border: 1px solid grey;
    text-align: left;
    background: #D3D3D3;
    padding: 1.5%;
`

 const Button = styled.button`
    background: #1E90FF;
    color: white;
    display: flex;
    font-size: 1.5rem;
    width: 220px;
    padding: 5%;
    text-align: center;
    position: center;
    flex-direction: column;
    cursor: pointer;
    textDecoration: none;
    

`
 class SideBar extends React.Component {
    render(){
        return(
            <Bar>
                <Title>Lambda Notes</Title>
                <Link to='/' style={{'text-decoration': 'none'}}><Button>View Your Notes</Button></Link>
                <Link to='/new'style={{'text-decoration': 'none'}} ><Button>Create New Note</Button></Link>
            </Bar>
        );
    }
}
 export default SideBar; 