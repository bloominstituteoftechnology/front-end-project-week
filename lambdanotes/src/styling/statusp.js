import Styled from 'styled-components';

export default Styled.p`
    font-size: 1.6rem;
    color: ${(props) => {
        switch(props.statusType) {
            case 'error':
                return '#ca001a';
            case 'good':
                return '#24b8bd';
            case 'warning':
                return '#cc9933'
            default:
                return '#000000';
        }
    }}
`;
