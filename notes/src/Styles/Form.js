import styled from 'styled-components';
import { buttonColor } from './variables';

export const Form = styled.section `
    margin-left: 350px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 20px;

    form {
        display: flex;
        height: 500px;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
    }
`;

export const TitleInput = styled.input `
    width: 60%;
    height: 10%;
`;

export const BodyInput = styled.input `
    width: 100%;
    height: 50%;
`;

export const Button = styled.button `
    background-color: ${buttonColor};
    border: none;
    color: white;
    padding: 15px 50px;
    text-decoration: none;
    font-size: 16px;
    margin: 20px 0;
    width: 40%;
    height: 10%;
`;