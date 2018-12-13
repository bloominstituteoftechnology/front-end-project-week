import styled from 'styled-components';
import { borderColor } from './variables';

const Note = styled.section `
    padding: 20px;
    width: 300px;
    height: 300px;
    border: 2px solid ${borderColor}
    color: black;
    margin: 20px 0;

    hr {
        color: ${borderColor};
    }
`;


export default Note;