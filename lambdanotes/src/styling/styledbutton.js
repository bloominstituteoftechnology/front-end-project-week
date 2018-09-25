import Styled from 'styled-components';

export default Styled.div`
    width: 190px;
    height: 45px;
    /* margin: 10px auto; */
    margin: 10px;
    border: 1px solid #afafaf;
    border-radius: 1px;
    box-shadow: none;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => {
        switch(props.buttonColor) {
            case 'red':
                return '#ca001a';
            case 'aqua':
                return '#24b8bd';
            default:
                return '#888888';
        }
    }}
    &:focus {
        outline: 0;
    }
`;

export const StyledFormButton = Styled.button`
    width: 190px;
    height: 45px;
    margin: 10px auto;
    border: 1px solid #afafaf;
    border-radius: 1px;
    box-shadow: none;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => {
        switch(props.buttonColor) {
            case 'red':
                return '#ca001a';
            case 'aqua':
                return '#24b8bd';
            default:
                return '#888888';
        }
    }}
    &:focus {
        outline: 0;
    }
`;
