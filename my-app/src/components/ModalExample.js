import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {  Grid, Row, Col,  Modal } from 'react-bootstrap';

class ModalExample extends Component{
  constructor(props) {
         super(props);

         this.state = {
             show: false
         };

         this.showModal = this.showModal.bind(this);
         this.hideModal = this.hideModal.bind(this);
     }

     showModal() {
         this.setState({
             show: true
         });
     }
     hideModal(){
       this.setState({
         show: false
       })
     }


    render(){

      return(

        <div className="deleteButton">

                            <Col md={1}>
                                <a onClick={this.showModal}>delete</a>

                                <Modal show={this.state.show} onHide={this.hideModal} aria-labelledby='ModalHeader'>
                                    <Modal.Header closeButton>
                                        {/* <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title> */}
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p id="pInModal">Are you sure you want to delete this?</p><br />
                                        <Row>
                                        <Col md={6}>
                                              <button className='btn btn-danger'>
                                                  Delete
                                              </button>
                                        </Col>
                                        <Col md={6}>
                                              <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                        </Col>
                                      </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    
                                    </Modal.Footer>
                                </Modal>

                            </Col>

        </div>  /* -----App div close-----*/

      )
    }
  }

export default ModalExample;