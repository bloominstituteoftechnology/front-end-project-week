import styled from 'styled-components';

export const SideBarDiv = styled.div`
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 3%;
    background-color: rgb(211,210,211);
`;

export const SideBarButton = styled.button`
    width: 22vw;
    height: 5vh;
    border: 1px solid rgb(169, 187, 188);
    display: inline-block;
    text-decoration: none;
    align-self: center;
    background: rgb(0, 187, 191);
    color: white;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-size: 1.4rem;

    &:hover{
        border: 2px solid rgb(0, 187, 191);
        background: white;
        color: rgb(0, 187, 191);
    }
`;

export const Header = styled.h1`
    color: rgb(65, 65, 65);
    text-align: left;
    font-size: 3.4rem;
`;


