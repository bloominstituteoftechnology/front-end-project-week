import React from 'react';

import styled from 'styled-components';


const Title = styled.h3`
    margin: 10px 0px 0px 20px;
    padding: 0px 20px 0px 0px;
    font-size: 20px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    color:black;
    text-decoration:none;
`

const Content = styled.p`
    margin: 10px 10px 0px 20px;
    padding: 10px 10px 10px 0px;
    border-top: 1px solid black;
    font-size: 10px;
    white-space: wrap;
    overflow:hidden;
    text-overflow: ellipsis;
    height: 180px;
`

const Notes = props => {
    // console.log(props)
    return (
            <div>
                <Title>{props.title}</Title>
                <Content>{props.textBody}</Content>
            </div>

    )
    
}

export default Notes;