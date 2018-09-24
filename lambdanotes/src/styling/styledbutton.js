import Styled from 'styled-components';

export default Styled.button`
    width: 190px;
    height: 45px;
    margin: 10px;
    border: 1px solid #acb7b8;
    border-radius: 1px;
    box-shadow: none;
    font-weight: bold;
    cursor: pointer;
    color: #ffffff;
    background-color: ${props => props.buttonColor === 'red' ? '#ca001a' : '#24b8bd'};
    &:focus {
        outline:0;
    }
`;
