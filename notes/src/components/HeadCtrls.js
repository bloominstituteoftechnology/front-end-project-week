import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import NewNote from './NewNote.js';


const HeadCtrlsContainer = styled.div`
    width:405px;
    height:50px;
    background:gray;
    display:flex;
    flex-flow:row;
    justify-content:space-around;
    align-items:center;
    border: solid 1px white;
    margin:0 auto;
`;



const HeadCtrls = (props) => {
    // console.log(props);

    return (
        <HeadCtrlsContainer>
            <h3>NoteNote</h3>
            <Link to="/addnote">
                <h1 class="add-btn">+</h1>
            </Link>
            {/* <Route path="/addnote" component={NewNote} /> */}
        </HeadCtrlsContainer>
    )
};

export default HeadCtrls;