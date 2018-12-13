import styled from 'styled-components';
import { buttonColor, pColor } from './variables';

export const Title = styled.h1 `
    font-size: 30px;
`;

export const SectionHeading = styled.h2 `
    font-size: 25px;
`;

export const NoteHeading = styled.h3 `
    font-size: 20px;
`;

export const P = styled.p `
    font-size: 18px;
    color: ${pColor};
`;

export const Button = styled.section `
    background-color: ${buttonColor};
    border: none;
    color: white;
    padding: 15px 50px;
    text-decoration: none;
    font-size: 16px;
    margin: 20px 0;
`;