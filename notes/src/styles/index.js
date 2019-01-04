import styled from 'styled-components';

export const Header = styled.header`
    width: 25%;
    height: 100vh;
    position: fixed;
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
    margin-left: 25%;
    height: 100vh;
    position: fixed;
`;

export const ViewContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const NotesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`

export const NoteTab = styled.div`
    width: 20%;
    border: 2px solid #98A7B7;
    height: 100px;
    display: flex;
    flex-direction: column;
    flexwrap: wrap;
    overflow: hidden;
    padding: 1%;
    margin-top: 2%;;
`

export const NoteTabTitle = styled.h3`
    color: #98A7B7;
    margin: 0;
`