import React, { Component } from 'react'; 
import { Route, Link } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';

class ViewNote extends Component {
    state = {
        modal: false 
    };
    
    toggle = this.toggle.bind(this);

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
          <Route path='/ViewNote'>
            <div className='body'>
                <div className='col=12 d-flex flex-row justify-content-end'>

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
                        <p className='mt-4'>Content</p>
                    </div>
                </Route>
        )
    }
}

export default ViewNote;
                            



        )
    }
}