import styled, { css } from 'styled-components';

export const DeleteContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
`;


export const DeleteModule = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 150px;
    padding: 12px 16px;
    background: rgb(255,255,255);
    margin-top: 100px;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const MassDeleteButton = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    color: white;
    background-color: #F5B504;
    border-radius: 8px;
    position: relative;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    ${props => props.amountChecked <= 0 && css`
        color: rgba(255,255,255, 0.6);
    `}
`;
