import styled from 'styled-components';

export const Header = styled.header`
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column
    align-items: center;
    background-color: #322841;
    float: left;
`;

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.h1`
    color: #807B8E;
    font-size: 2rem;
`;

export const NavText = styled.p`
    color: #DC9B40;
    font-size: 1.5rem;
`;

export const AppContainer = styled.div`
    float: left;
    background-color: #FAF6F6;
    width: 75%;
    height: 100vh;
`;

export const ViewContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;