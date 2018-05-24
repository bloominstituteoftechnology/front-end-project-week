import React from 'react';
import './css/notesView.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

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
      <div class = "noteArea">
            <div class="row editDelete">
              <div class="col-1">
              <Link to="/editView"><a>edit</a></Link>
              </div>
              <div class="col-1">
               <a  onClick={this.toggle}>delete</a>
              </div>
            </div>
            <h4>Note Name</h4>
            <div class="row bodyP">
              <div class="col-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at est lobortis, consectetur est vitae, hendrerit massa. Quisque hendrerit egestas ante vel consectetur. Suspendisse potenti. Donec ut nibh sed risus ultrices luctus vitae ac ante. Nam vel mi volutpat, ultricies neque porttitor, consectetur tellus. Duis ligula libero, placerat id auctor in, elementum in magna. Proin in ipsum blandit, varius risus nec, tincidunt lectus. Nullam eget placerat lacus. Maecenas facilisis auctor euismod. Maecenas cursus lorem mauris, at sodales felis auctor a. Duis sed rutrum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempor nec quam sodales sagittis.

</p>
              </div>
              <div class="col-12">
                <p>Ut viverra dapibus imperdiet. Vestibulum congue iaculis condimentum. Nullam vitae diam diam. Ut malesuada, felis nec faucibus suscipit, diam metus facilisis ipsum, ut euismod nunc mi et enim. Aliquam in diam quis quam sodales gravida. Vestibulum non odio dictum, pharetra eros et, venenatis quam. Integer eget leo porta, pulvinar nisl at, rhoncus magna. Vivamus et pellentesque velit. Vivamus vitae felis ipsum. Ut lobortis, urna in porta fermentum, est leo aliquam odio, a laoreet libero dolor ut urna. Nulla facilisi. Nulla et sapien vitae nisi ornare facilisis. Ut eleifend vulputate posuere. Suspendisse mollis auctor aliquet. Nunc eros nibh, commodo vitae augue nec, placerat convallis eros. Praesent est lacus, dignissim laoreet ante nec, mattis maximus sem.</p>
              </div>
            </div>

            {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                <ModalBody>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalBody>
              </Modal>

      </div>
    );
  }
}

export default NotesView;