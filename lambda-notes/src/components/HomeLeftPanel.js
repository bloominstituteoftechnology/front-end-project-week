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
    width: 30%;
    
    h2 {
        font-family: Roboto, sans-serif;
        margin-bottom: 2px;
        font-weight: bold;
    }

    button {
        font-size: 12px;
        width: 84%;
        background: #2bc1c4;
    }
`;

const HomeLeftPanel = () => {
    return(
    <StyledHLP>
        <div className="HLP__heading">
            <div> Lambda </div>
            <div> Notes </div>
        </div>
        <Link to='/'>
        <button> View Your Notes </button>
        </Link>
        <Link to='/create-new-note/'>
        <button> + Create New Note </button>
        </Link>
    </StyledHLP>
    )
}

const mapStateToProps = (state) => {
    return {
      notes: state.notes
    };
  };
  
  export default connect(mapStateToProps, {})(HomeLeftPanel);