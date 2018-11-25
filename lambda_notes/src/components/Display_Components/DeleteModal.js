import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import { DangerBtn, BtnStyle, ModalText, ButtonWrap } from '../Styles/DeleteModalStyle';



export default class DeleteModal extends Component {

    state = {
        deleteMessage: '',
        open: false,
    }

    onOpenModal = () => {
        this.setState({ open: true, });
    };

    onCloseModal = () => {
        this.setState({ open: false, })
    };

    onDelete = (e) => {
        e.preventDefault();
        this.deleteNote(this.props.id);
    }

  deleteNote = (id) => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => {
            this.setState({
                notes: res.data,
                deleteMessage: "Note deleted successfully",
            })
        })
        .catch(err => console.log(err))
    }

  render() {
    const { open } = this.state;
      return (
            <div>
                <div onClick={this.onOpenModal}>Delete</div>
                <Modal closeIconSize={0} open={open}  center>
                    <ModalText>Are you sure you want to delete this?</ModalText>
                    <ButtonWrap>
                        <DangerBtn onClick={this.onDelete} onClickCapture={this.onCloseModal}>Delete</DangerBtn>
                        <BtnStyle onClick={this.onCloseModal}>No</BtnStyle>
                    </ButtonWrap>
                </Modal>
            </div>
        )
    }
}
