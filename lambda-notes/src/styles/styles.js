import Styled from 'styled-components'

export const Heading = Styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #4A4A4A;
    font-size: ${props => props.main ? '36px' : '24px'};
    align-self: flex-start;
`;

export const Button = Styled.button`
    background: ${props => props.delete ? 'red' : '#2BC1C4'};
    color: #FFFFFF;
    border: 1px solid #979797;
    width: 190px;
    height: 45px;
    margin: ${props => props.search ? '0' : '10px 0'};
    font-size: 16px;
`;

export const Body = Styled.p`
    font-family: 'Raleway', sans-serif;
    color: #4A4A4A;
`;