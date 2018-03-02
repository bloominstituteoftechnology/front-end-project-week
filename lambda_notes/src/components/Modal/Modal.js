import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false) return null;
    return (
      <div>
        <div className="Backdrop"/>
        <div className="Modal">
          <div>{this.props.children}</div>
          <div onClick={event => this.close(event)}/>
        </div>
      </div>
    )
  }

  close(event) {
    event.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}

export default Modal;