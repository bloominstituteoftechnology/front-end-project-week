import React from 'react';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';

const StyledButton = styled.button`
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
    border: none;
    outline: rgba(0, 0, 0, 0.2) solid 2px;
    background: ${styleVars.buttonColor};
    color: ${styleVars.buttonFontColor};
    padding: 8px;
    letter-spacing: -1px;
`;

function Button(props) {
    return (
        <StyledButton className={props.className}>{props.text}</StyledButton>
    );
}

export default Button;
