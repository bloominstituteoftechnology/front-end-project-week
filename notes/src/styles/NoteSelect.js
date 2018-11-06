
import styled from 'styled-components';

export const CheckContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    line-height: 24px;
    z-index: 2;
    left: -10px;
    top: -10px;
    height: 24px;
    width: 24px;
    input {
        display: none;
    }
    i {
        font-size: 24px;
    }
    .fa-square{
        color: rgba(0,0,0,0.54);
        background: #F5F5F5;
    }
    .fa-check-square{
        color: #F5B504;
        background: white;
    }
`;