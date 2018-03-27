import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Button } from 'reactstrap';

const StyledHLP = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background: lightgray;



`;

const HomeLeftPanel = () => {
    return(
    <StyledHLP>
        <Link to='/'>
        <button> 'View Your Notes' </button>
        </Link>
        <Link to='/create-new-note/'>
        <button> '+ Create New Note' </button>
        </Link>
    </StyledHLP>
    )
}

export default connect(null, {})(HomeLeftPanel);