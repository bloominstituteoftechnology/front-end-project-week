import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Col = styled.div`
    width: 25%;
    height: 100vh;
    border: 1px solid lightgray;
    background: #D2D2D2;
    padding: 1rem;
`;
const H1 = styled.h1`
    max-width: 200px;
    font-size: 3rem;
    color: #3C3C3C;
`;
const CustomButton = styled.button`
    background: #2AB4AE;
    color: white;
    width: 250px;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
`;

class SideBar extends React.Component {
    render(){
        return(
            <Col>
                <Link to="/get/all" style={{ textDecoration: 'none' }}>
                    <H1>Lambda Notes</H1>
                </Link>
                <Link to="/get/all" style={{ textDecoration: 'none' }}>
                    <CustomButton>View Your Notes</CustomButton>
                </Link>
                <Link to="/note/create" style={{ textDecoration: 'none' }}>
                    <CustomButton>+ Create New Note</CustomButton>
                </Link>
            </Col>
        );
    }
}

export default SideBar;