import React from 'react';
import './view.css';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export class ViewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state={
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
        return <div className="col-9 right__side">
            <div className="row">
              <div className="col-4 edit">
                <Link to="/editnote">Edit</Link>
              </div>
              <div className=" col-3 delete">
                <Link to="#" onClick={this.toggle}>
                  {this.props.buttonLabel}Delete
                </Link>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody className="modalBody">
                    Are you sure you want to delete?
                  </ModalBody>
                  <ModalFooter>
                    <Link to={"/"} className="primary" onClick={this.toggle}>Delete</Link>
                    <button className="secondary" onClick={this.toggle}>No</button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
            <div className="row">
              <h4>Note Title</h4>
            </div>
            <div className="row">
              <p>
                Yr ennui mlkshk heirloom vape fanny pack health goth.
                Kinfolk biodiesel lo-fi synth live-edge bitters squid
                skateboard. Tousled street art snackwave, readymade
                occupy offal organic semiotics taiyaki master cleanse
                yuccie intelligentsia cronut waistcoat bicycle rights.
                Mixtape neutra blue bottle, art party offal live-edge
                mustache marfa. Raw denim glossier green juice shabby
                chic meh edison bulb, typewriter hashtag disrupt
                kickstarter keytar mlkshk. Semiotics banjo flexitarian
                williamsburg chartreuse. Snackwave etsy normcore,
                fashion axe kitsch gastropub fixie pour-over enamel pin
                keffiyeh.
              </p>
              <p>
                Raclette tousled godard, yr bespoke leggings affogato
                plaid hashtag pok pok enamel pin disrupt 3 wolf moon.
                Kitsch meggings deep v, normcore mlkshk fingerstache
                actually poutine kombucha microdosing aesthetic
                chicharrones. Venmo 90's tumeric iPhone mumblecore. La
                croix flannel put a bird on it meggings migas kombucha
                microdosing vice chartreuse twee narwhal.
              </p>
            </div>
          </div>;
    }
}   

