//IMPORTS
import React, { Component } from 'react';
// import {Route, Link} from 'react-router-dom';
// import { Modal, ModalBody } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Form, Input, Row, Col, Button } from 'reactstrap';

//VIEW NOTE COMPONENT
class AddNote extends Component {

// class ViewNote extends Component {
//     state = {
//         modal: false
//     };

//     toggle = this.toggle.bind(this);

//     toggle() {
//         this.setState({
//             modal: !this.state.modal
//         });
//     }
    
    render() {
        return (
            <div>
                <Row>
                    <Col className='col-3 ml-auto'>
                        Edit Delete
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <h3>{this.props.selectedNote.title}</h3><br />
                        <p>{this.props.selectedNote.content}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(AddNote);

            {/* <Route path='/ViewNote'>
                <div className='body'>
                    <div className='col-12 d-flex flex-row justify-content-end'>

                        <Link className='modalLink mr-3 font-weight-bold' to='/EditNote'>Edit</Link>
                        <button type='button' onClick={this.toggle} className='modalLink font-weight-bold'>Delete</button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalBody className='row d-flex flex-row justify-content-center flex-wrap'>
                                <p className='modeTitle col-12'>Are you sure you want to delete this?</p>
                                <Link to='/' className='deleteLink col-5'>
                                    <button className='modeButton' onClick={this.toggle}>Delete</button>
                                </Link>
                                <Link to='/ViewNote' className='deleteLink col-5'>
                                    <button className='modeButton_no' onClick={this.toggle}>No</button>
                                </Link>
                            </ModalBody>
                        </Modal>
                    </div>
                    <h2 className='font-weight-bold sub_header'>Note Name</h2>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, est in feugiat at quisque nulla dignissim. Sodales urna, id purus at mattis, enim consectetuer quisque phasellus tempus fermentum, maecenas fermentum bibendum mollis vestibulum faucibus. Lorem nibh congue rem. Massa tortor facilisis metus purus, turpis in mauris. Vel ut mollis tempus pede, morbi dolor donec condimentum venenatis nec cras, orci massa sit, fermentum ut tempor sit maecenas id. Eu in quam tempus, wisi augue viverra faucibus sed in, rutrum libero quis adipiscing habitasse donec cras, laoreet sed praesent sagittis. Non donec maecenas non turpis ridiculus, mauris dis aliquam morbi nullam eget pellentesque, augue pellentesque nunc dolor dolor ut pellentesque, at placerat arcu leo lacus. Lorem commodo, venenatis laoreet arcu ligula, proin lectus nulla ut orci dui eget, vehicula duis commodo nunc, porttitor nulla non consequat morbi eu justo. Ac ac nec, cras lobortis lacus mollis eget, arcu aenean porta, lectus nunc ut quis dolor ultricies phasellus. Velit vel purus ipsum eos varius, urna maecenas aliquam cras, consectetuer libero, dui amet, amet diam. In mauris. Sapien porta nibh, vestibulum integer.</p>

                    <p>Nunc vestibulum curabitur dui vel arcu, orci sem nulla, tincidunt velit amet accumsan vitae, at dictum nam erat dolor duis, sed feugiat quam ligula. Augue magna nec morbi ut vestibulum, tincidunt vel elit. Fermentum wisi duis erat, sapien ridiculus elit neque pharetra cras sit, tempus ad vivamus in lacus eget. Nonummy blandit. Sit dolor ornare, auctor quis porta. Lorem sed ut tincidunt fusce pellentesque vestibulum. Lectus wisi arcu sit, sollicitudin ac nulla cursus ut, ut mauris, phasellus amet dictumst et pede. Quis arcu pharetra, quisque suscipit nunc, litora tellus vestibulum, ut mollis, id vulputate. Torquent aliquam blandit, erat ut auctor parturient venenatis gravida eget, massa sed, tortor mattis quam at mi at leo, elementum magna. Purus ligula volutpat quam justo, gravida et mauris integer convallis non, felis tincidunt quis. Eros sit facilisi sapien et suspendisse orci, quis tellus fames vivamus non, sit orci natoque non hac leo, porta lorem. Sed amet aliquam enim hendrerit, risus praesent ut ultricies wisi vel, luctus mauris, sagittis ante integer, tellus venenatis sit quis purus phasellus posuere.</p>

                    <p>Enim est dignissim interdum malesuada, egestas ipsum proin pellentesque montes leo, vestibulum nisl, ligula mauris sit mauris justo mi. Eros congue sit. Vel lobortis nec tortor erat, etiam laoreet neque sint, ullamcorper sed nostra etiam ut nec nunc, ac sit. Mauris eget adipiscing mi accumsan torquent tincidunt, convallis facilisis, odio interdum imperdiet mollis at mattis, nec sagittis pellentesque nulla justo consectetur commodo, id nonummy molestie sed fusce amet pulvinar. Dolor nullam curabitur lacus, risus eget sem nec, ut sed vitae wisi luctus diam, id nunc. Tellus luctus non ut ligula vel platea. Ac et. Nec aliquam, augue eu nulla nam aliquam pellentesque, congue nec donec lorem, consectetuer dui, nibh vestibulum. Vel morbi molestie, ligula sodales, tempus praesent ac donec aliquam, et mi turpis, sed mauris.</p>

                    <p>Sed netus velit praesent vestibulum, aenean auctor consectetuer tellus, sodales eu consectetuer per egestas purus aenean. Vulputate est, fermentum id ligula enim dui vulputate, quis id, sodales culpa. Numquam platea viverra felis, cursus pellentesque augue adipiscing, eros elit consequat quasi ante praesent. Ullamcorper at, turpis interdum purus duis mollis laoreet mauris. Volutpat id eros suspendisse, magna et vivamus nec leo. Arcu erat pellentesque, quis sed ut velit odio suspendisse, elementum consequat integer condimentum in veniam. Malesuada in vehicula, vel tincidunt, dolor ornare. Ipsum vivamus gravida vel odio ultricies et, in mauris ac nulla.</p> 
                </div>
            </Route>
        )
    }
} */}