import styled from 'styled-components';
import { buttonColor } from './variables';

export const Title = styled.h1 `
    font-size: 30px;
`;

export const Button = styled.button `
    background-color: ${buttonColor};
    border: none;
    color: white;
    padding: 15px 100px;
    text-decoration: none;
    font-size: 16px;
    margin: 20px 0;
`;