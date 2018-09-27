import React from 'react';

class DeleteModal extends React.Component {
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

        return (
        <div className="backdrop" style={{backdropStyle}}>
            <div className="modal" style={{modalStyle}}>
                <p>Are you sure you want to delete this?</p>

            <div className="modal-buttons">
            <button onClick={this.props.onClose}>
              Delete
            </button>
            <button>No</button>
          </div>
        </div>
      </div>
        )
    }
}

export default DeleteModal;