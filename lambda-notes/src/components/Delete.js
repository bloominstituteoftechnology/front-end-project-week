import React from 'react';
import Styled from 'styled-components'
import {Button} from './../styles/styles';

const Background = Styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: 0;
overlay: hidden;
`;

const TransBackground = Styled.div`
    background-color: #D8D8D8;
    opacity: .5;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overlay: hidden;
`;

const ModalContainer = Styled.div`
    width: 70%;
    height: 160px;
    border: 1px solid black;
    background: #FFFFFF;
    margin: 200px auto;
    display: flex;
    justify-content: center;
    padding: 20px;
    position: relative;
`;

const Modal = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

const Buttons = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
    
    }

    deleteNote = () => {

    }

    render() {
        return(
            <Background>
            <TransBackground>
                {console.log(this.props.toggleModal)}
                
            </TransBackground>
            <ModalContainer>
                    <Modal>
                    <p>Are you sure you want to delete this?</p>
                    <Buttons>
                        <Button delete onClick={this.deleteNote}>Delete</Button>
                        <Button onClick={this.props.toggleModal}>No</Button>
                    </Buttons>
                    </Modal>
                </ModalContainer>
            </Background>
        )
    }
}
export default DeleteModal;