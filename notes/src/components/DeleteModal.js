import React from 'react';
import styled from 'styled-components';

const DeleteButton = styled.button`
width: 200px;
height: 50px;
background-color: red;
color: white;
`

const NoButton = styled.button`
width: 200px;
height: 50px;
background-color: #24B8BD;
color: white;
`

const ModalBackground = styled.div`
position: 'fixed',
top: 0,
bottom: 0,
left: 0,
right: 0,
backgroundColor: 'rgba(0,0,0,0.3)',
padding: 50

`
const ModalBox = styled.div`
backgroundColor: '#fff',
borderRadius: 5,
maxWidth: 500,
minHeight: 300,
margin: '0 auto',
padding: 30,
`

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        if(!this.props.show) {
            return null;
        }
        const noteToDelete = this.props.notes.find(note => note._id === this.props.match.params.noteId);
        return (
            
        <ModalBackground>
            <ModalBox>
                <p>Are you sure you want to delete this?</p>

            <div className="modal-buttons">
            <DeleteButton onClick={(event) => this.props.delete(event, noteToDelete._id)}>
              Delete
              </DeleteButton>
            <NoButton onClick={this.props.cancelDelete}>No</NoButton>
          </div>
        </ModalBox>
      </ModalBackground>
        )
    }
}

const mapStateToProps = state => {
    notes: state.notes
}

export default DeleteModal;