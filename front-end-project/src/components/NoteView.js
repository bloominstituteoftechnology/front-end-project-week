import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import '../styles/NoteView.css'

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
    render() {
        return (
            <div>
                <div className="main-text">
                    <div className="row yourNotes">
                        <h3 style={{ textAlign: "left" }}> Note Name </h3>
                    </div>
                </div>
                <div>
                    <NavLink to="/edit"><div className="edit"> edit </div></NavLink>
                    <div className="delete" onClick={this.toggle}> delete</div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered">
                        <ModalBody>
                            <p>Are you sure you want to delete this?</p>
                            <Button color="danger" className="modalbutton" onClick={this.toggle}> Delete </Button><Button className="button modalbutton" onClick={this.toggle}> Cancel </Button>
                        </ModalBody>
                    </Modal>
                    <p className="note">
                        Lorem ipsum dolor sit amet, consectetur adipscing elit.  Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam.  Duis malesuada justo a iaculis sagittis.  Vestibulum ultrices ultricies arcu sit amet pharetra.  Duis et lectus arcu.  Morbi ornare dignissim dui, eu accumsan sapien lacinia et.  Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi.  Vivamus elementum auctor ligula, at tempor nisl rutrum in.  Sed in eros luctus ligula porta efficitur eu non nibh.  Aliquam tellus ipsum, semper id cursus vel, posuere in dolor.  Phasellus maximus lacinia dolor eget laoreet.
                </p>
                    <p className="note">
                        Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus, blandit ac purus a, efficitur mollis velit.  ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit.  Sed feugiat nibh vel molestie sollicitudin.  Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel.  Aenean quis enim placerat, posuere orci ac, condimentum tellus.  Vivamus vitae sodales quam, eget ultricies lorem.  Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae.  Curabitur sit amet turpis quam.  Duis eget metus elementum, solicitudin dui sed, accumsan dui.  Donec ut est orci.  Nunc fringilla purus sit amet posuere volutpat.  Fusce vitae lectus is neque facilisis laoreet eget non odio.  Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.
                </p>
                </div>
            </div>
        )
    }
}

export default NoteView