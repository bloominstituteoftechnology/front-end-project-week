import styled from 'styled-components';

export const NoteModuleContainer = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
`;

export const NoteModuleInput = styled.input`
    border: none;
    height: 46px;
    padding: 12px 16px;
    outline: none;
    border-radius: 8px;
    background: transparent;
    width: 100%;
    font-size: 15px;
    color: #202124;
    font-weight: 600;
    letter-spacing: 0.9px;
    line-height: 24px;
    ::placeholder{
        color: #757575;
        font-size: 16px;
    }
`;

export const NoteModuleTextArea = styled.textarea`
    border: none;
    padding: 12px 16px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border-radius: 8px;
    background: transparent;
    width: 100%;
    resize: none;
    overflow: hidden;
    white-space: wrap;
    overflow-wrap: break-word;
    height: 125px;
    ::placeholder {
        color: #202124;
    }
`;

export const NoteModuleForm = styled.form`
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
    color: rgb(32, 33, 36);
    width: 600px;
    height: 222px;
    margin: 132px auto 16px auto;
    position: relative;
    background-color: white;
    @media (max-width: 650px) {
        width: 90%;
    }
`;

export const CloseIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #000000;
    color: white;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    position: absolute;
    z-index: 6;
    top: -12px;
    right: -12px;
    opacity: 1;
    cursor: pointer;
    :hover {
        transition-duration: .218s;
        transition-timing-function: ease-in;
        transform: scale(1.08);
        i {
            transition-duration: .218s;
            transition-timing-function: ease-in;
            transform: scale(1.15);
        }
    }
`;

