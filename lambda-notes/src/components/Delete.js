import React from 'react';
import Styled from 'styled-components'
import {Button} from './../styles/styles';
import { Redirect } from 'react-router';
import axios from 'axios';

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
        this.state = {
            notes: [],
            delete: false
    }
    }

    deleteNote = () => {

        axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.props.id}`)
      .then(response => {
          console.log(response);
          this.setState({notes: response.data})
      })
      .catch(err => {
          console.log(err)
      })
    this.setState({delete: !this.state.delete})
  }

  componentDidMount() {
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
        console.log(response);
        this.setState({notes: response.data})
    })
    .catch(err => {
        console.log(err)
    })

}

    render() {
        return(
            <Background>
            <TransBackground>
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
                {this.state.delete ? <Redirect to='/notes' /> : null}
            </Background>
        )
    }
}
export default DeleteModal;