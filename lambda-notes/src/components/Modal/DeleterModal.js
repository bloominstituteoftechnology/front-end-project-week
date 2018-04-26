import React from 'react';
import { Button } from 'reactstrap';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button className="mainContent__options--links" onClick={this.toggle}>delete</Button>
        {this.state.modal ? 
        <div className={this.props.modal} >
          <div className="contain">
            <div className={this.props.body} >
              Are you sure you want to delete this?
            </div>
            <div className={this.props.footer} >
              <Button className={this.props.delete} onClick={() => this.props.removeNote()}>Delete</Button>{' '}
              <Button className={this.props.cancel} onClick={this.toggle}>No</Button>
            </div>
          </div>
        </div> : null }
      </div>
    );
  }
}

export default DeleteModal;