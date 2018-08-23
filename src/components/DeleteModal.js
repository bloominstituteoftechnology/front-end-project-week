import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

const StyledModal = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: grey; 
    opacity: 0.8; 
    z-index: 2;
`;

const StyledInnerBox = styled.div`
    position: relative;
    background: white;
    border: 2px solid grey;
    margin: 25% auto;
    width: 50%;
    height: 25%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    z-index: 300;
    opacity: 1;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    margin: 5%;
    width: 25%;
    margin: 1%;
    width: 200px;
    height: 40px;
    border: 1px solid grey;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DeleteModal = (props) => {
    return (
        <StyledModal>
            <StyledInnerBox>
                <p>Are you sure you want to delete this?</p>
                <StyledButtons>
                    <StyledLink to={'/notes'}
                        onClick={() => props.deleteNote(props.match.params.id)}
                        style={{background: '#D0021B'}} >Delete</StyledLink>
                    <StyledLink to={`/notes/${props.match.params.id}`} 
                        style={{background: 'turquoise'}}>No</StyledLink>
                </StyledButtons>
            </StyledInnerBox>
        </StyledModal>
    );  
}

const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, { deleteNote })(DeleteModal);