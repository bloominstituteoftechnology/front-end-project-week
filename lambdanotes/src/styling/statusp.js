import Styled from 'styled-components';

export default Styled.p`
    font-size: 1.6rem;
    color: ${(props) => {
        switch(props.statusType) {
            case 'error':
                return '#ff0000';
            case 'good':
                return '#00ff00';
            case 'warning':
                return '#cc9933'
            default:
                return '#000000';
        }
    }}
`;
