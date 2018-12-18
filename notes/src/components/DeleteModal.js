import React from 'react';
import PropTypes from 'prop-types';

class DeleteModal extends React.Component {
  render() {
    
    if(!this.props.show) {
      return null;
    }

    return (
        <div>
          {this.props.children}
          <div>
            <button onClick={this.props.onClose}>
              No
            </button>
          </div>
        </div>
    );
  }
}

DeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default DeleteModal;