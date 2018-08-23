import styled from 'styled-components';

export const ModalWrapper = styled.div`
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: auto;
    background: rgba(211, 210, 211, .9);
`

export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 532.83px;
    margin-top: 169px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;
    padding-top: 44px;

    p {
        margin-top: 0;
    }
`

export const ModalButtonsContainer = styled.div`
    margin-top: 14px;
    width: 100%;
    display: flex;
    height: 42px;
`

export const ModalDeleteButton = styled.button`
    width: 190px;
    margin-right: 21px;
    margin-left: 50px;
    background: #D0021B;
    color: #FFFFFF;
    font-weight: bold;
    border: #979797;
    font-size: 1.5rem;
    cursor: pointer;
`

export const ModalCancelButton = styled.button`
    width: 190px;
    border: #979797;
    color: #FFFFFF;
    background: #2BC1C4;
    font-size: 1.5rem;
    cursor: pointer;
`