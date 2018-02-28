import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class Modal extends Component {
  state = { 
    open: false 
  }
  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    console.log(this.props);
    return (
      <div>
        <Button color="red" onClick={this.show}>{this.props.text}</Button>
        <Confirm
          open={this.state.open}
          content="Are You Sure?????"
          cancelButton="Nope"
          confirmButton="Hell Yes!"
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default Modal;
