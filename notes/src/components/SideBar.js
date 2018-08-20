import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Col = styled.div`
    width: 300px;
    height: 100vh;
    border: 1px solid lightgray;
    background: #D2D2D2;
    padding: 1rem;
`
const H1 = styled.h1`
    max-width: 200px;
`

const Button = styled.button`
    background: #2AB4AE;
    color: white;
    width: 280px;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
`

class SideBar extends React.Component {
    render(){
        return(
            <Col>
                <H1>Lambda Notes</H1>
                <Link to="/noteslist" style={{ textDecoration: 'none' }}>
                    <Button>View Your Notes</Button>
                </Link>
                <Link to="createnewnote" style={{ textDecoration: 'none' }}>
                    <Button>+ Create New Note</Button>
                </Link>
            </Col>
        );
    }
}

export default SideBar;