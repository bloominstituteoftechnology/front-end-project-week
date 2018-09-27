import React from 'react';
import styled from 'styled-components';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
    };

    const DeleteButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: red;
    color: white;
    `

    const ModalBackground = styled.div`
    
    `

    render() {
        if(!this.props.show) {
            return null;
        }

        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30,
        };
        const noteToDelete = this.props.notes.find(note => note._id === this.props.match.params.noteId);
        return (
            
        <div className="backdrop" style={{backdropStyle}}>
            <div className="modal" style={{modalStyle}}>
                <p>Are you sure you want to delete this?</p>

            <div className="modal-buttons">
            <button onClick={(event) => this.props.delete(event, noteToDelete._id)}>
              Delete
            </button>
            <button onClick={this.props.cancelDelete}>No</button>
          </div>
        </div>
      </div>
        )
    }
}

const mapStateToProps = state => {
    notes: state.notes
}

export default DeleteModal;