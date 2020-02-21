import React from 'react';
import styled from 'styled-components';

// import '../CSS/Note.css'

const ModalDiv = styled.div`
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    zIndex: 999;
    background-color: #919191;
    padding: 10px 20px 40px;
    borderRadius: 8px;

    display: flex;
    flex-direction: row;
    justify-content: center;
`

const MainModal = styled.div`
    display:flex;
    width: 400px;
    flex-wrap:wrap;
    justify-content:center;
`


const OptionButton = styled.button`
    width: 100px;
    height: 50px;
`

class Modal extends React.Component {

    deleteMethod = () => {
        this.props.delete();
    }

    render() {
        if(!this.props.show){
            return null;
        }   
        return (
            <ModalDiv>
                <MainModal>
                    <h1>DO YOU WISH TO DELETE?</h1>
                    <OptionButton onClick={this.deleteMethod}>YES</OptionButton>
                    <OptionButton onClick={this.props.onClose}>No</OptionButton>
                </MainModal>
            </ModalDiv>
        )
    }
}

export default Modal