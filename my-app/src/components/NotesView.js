import React from 'react';
import './css/notesView.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NotesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div class = "noteArea">
            <div class="row editDelete">
              <div class="col-1">
              <Link to="/editView"><a>edit</a></Link>
              </div>
              <div class="col-1">
                <Link to="/deleteView"><a>delete</a></Link>
              </div>
            </div>
            <h5>Note Name</h5>
            <div class="row bodyP">
              <div class="col-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at est lobortis, consectetur est vitae, hendrerit massa. Quisque hendrerit egestas ante vel consectetur. Suspendisse potenti. Donec ut nibh sed risus ultrices luctus vitae ac ante. Nam vel mi volutpat, ultricies neque porttitor, consectetur tellus. Duis ligula libero, placerat id auctor in, elementum in magna. Proin in ipsum blandit, varius risus nec, tincidunt lectus. Nullam eget placerat lacus. Maecenas facilisis auctor euismod. Maecenas cursus lorem mauris, at sodales felis auctor a. Duis sed rutrum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempor nec quam sodales sagittis.

</p>
              </div>
              <div class="col-12">
                <p>Ut viverra dapibus imperdiet. Vestibulum congue iaculis condimentum. Nullam vitae diam diam. Ut malesuada, felis nec faucibus suscipit, diam metus facilisis ipsum, ut euismod nunc mi et enim. Aliquam in diam quis quam sodales gravida. Vestibulum non odio dictum, pharetra eros et, venenatis quam. Integer eget leo porta, pulvinar nisl at, rhoncus magna. Vivamus et pellentesque velit. Vivamus vitae felis ipsum. Ut lobortis, urna in porta fermentum, est leo aliquam odio, a laoreet libero dolor ut urna. Nulla facilisi. Nulla et sapien vitae nisi ornare facilisis. Ut eleifend vulputate posuere. Suspendisse mollis auctor aliquet. Nunc eros nibh, commodo vitae augue nec, placerat convallis eros. Praesent est lacus, dignissim laoreet ante nec, mattis maximus sem.</p>
              </div>
            </div>
            
        </div>
      </div>
    );
  }
}

export default NotesView;