import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    background-color: white;   
`


const Note = props =>{
    return(
        <WrapperDiv>
            <div>
                {props.data.title}
            </div>
            <div>
                {props.data.textBody}    
            </div>
        </WrapperDiv>
    )
}


export default Note;