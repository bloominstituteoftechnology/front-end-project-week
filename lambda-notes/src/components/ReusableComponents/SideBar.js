import styled from "styled-components";

export const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #D8D8D8;
    height: 100%;
    max-width: 220px;
    width: 100%;
    border-right: 1px solid #979797;
    text-align: start;
    padding: 0 13.9px;
`

export const SideBarContent = styled.div`
    position: sticky;
    top: 0;
`

export const SideBarHeader = styled.h1`
    font-size: 3.4rem;
    line-height: 1;
    margin: 14px 0;
    font-family: 'Roboto', Arial, sans-serif;
    cursor: pointer;
`

export const MainButtons = styled.button`
    background: ${props => props.logout ? '#D0021B' : '#2BC1C4'};
    color: #FFFFFF;
    border: 1px solid #979797;
    padding: 13px 5px;
    margin: 8.7px 0;
    font-weight: 700;
    cursor: pointer;
    width: 191.22px;

    &:hover {
        background: ${props => props.logout ? '#AF1616' : '#16ACAF'};
    }
`