import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
    width: 300px;
    border: 1px solid grey;
    text-align: left;
    background: lightgrey;
`
const H1 = styled.h1`
`

const Button = styled.button`
    background: #57C6BB;
    color: white;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 280px;
    position: center;
    text-align: center;
`

class SideBar extends React.Component {
    render(){
        return(
            <Col>
                <H1>Lambda Notes</H1>
                <Button>View Your Notes</Button>
                <Button>+ Create New Note</Button>
            </Col>
        );
    }
}

export default SideBar;