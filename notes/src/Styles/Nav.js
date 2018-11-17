import styled from 'styled-components';
import { navBackgroundColor } from './variables';

const NavStyle = styled.section `
    display: flex;
    flex-direction: column;
    background-color: ${navBackgroundColor};
    margin: 0;
    padding: 10px;
    height: 100vh;
    position: fixed;

    a {
        text-decoration: none;
    }
`;

export default NavStyle;