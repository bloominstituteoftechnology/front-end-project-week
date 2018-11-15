import styled from 'styled-components';
import { navBackgroundColor } from './variables';

const Nav = styled.section `
    display: flex;
    flex-direction: column;
    background-color: ${navBackgroundColor};
    margin: 0;
    padding: 10px;
    height: 100vh;
`;

export default Nav;