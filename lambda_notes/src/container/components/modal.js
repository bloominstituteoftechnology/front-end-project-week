import React, { Component } from 'react';

class Modal extends Component {
    //this function closes the modal
    close(e) {
        e.preventDefault();
        if (this.props.closeModal) {
            this.props.closeModal()
        }
    }
    render() {
        //if this isOpen is false in our state(that was passed down) we don't open the modal
        if (this.props.isOpen === false)
            return null

        console.log(this.props);


        let modalStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#fff'
        }

        let backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        }

        return (
            // So this is interesting. We return this div, containing the children elements that
            // are part of the props object that were encapsulated inside of our modal component 
            <div>
                <div style={modalStyle}>{this.props.children}</div>
                <div style={backdropStyle} onClick={e => this.close(e)} />}
        </div>
        )

    }
}

export default Modal;