import React from 'react'
import PropTypes from 'prop-types'

class DeleteModal extends React.Component {
  constructor() {
    super();

    this.state= {
      deleting: false
    }
  }

  delete = () => {
    this.setState({deleting: true});

    return this.props.delete()
  }

  render () {
    return (
    <section className='delete-modal'>
      <section className='modal'>
      <p>Are you sure you want to delete this?</p>
      <button onClick={this.delete}>Delete</button>
      <button onClick={this.close}>No</button>
      {this.state.deleting ? <p className='loading'>Deleting Note...</p> : null}
      </section>
    </section>
  );
  }
}

export default DeleteModal;
