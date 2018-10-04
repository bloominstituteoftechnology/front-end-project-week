import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  render() {

    if(!this.props.show) {
      return null;
    }



    return (
      <div className="backdrop" >
        <div className="customModal" >
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.deleteNote(this.props.id)}>
              Yes
            </button>
            <button onClick={this.props.onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
