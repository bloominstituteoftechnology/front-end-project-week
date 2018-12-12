import React from 'react';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';

const StyledButton = styled.button`
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
    border: none;
    outline: rgba(0, 0, 0, 0.1) solid 2px;
    background: ${props =>
        !props.warn ? styleVars.buttonColor : styleVars.buttonColorWarn};
    color: ${styleVars.buttonFontColor};
    padding: 8px;
    letter-spacing: -1px;
    text-decoration: none;
    cursor: pointer;
`;

function Button(props) {
    return (
        <StyledButton warn={props.warn} className={props.className}>
            {props.text}
        </StyledButton>
    );
}

export default Button;
