import React, { Component } from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
            
        };
       
    }
    render() {
        return (
            <div className="container2">

            
                <div className="EditDelete-TopNavRight">
                    <Button color="link">edit</Button>
                    <Button className='navLinkDelete' color="link" onClick={this.toggle}>{this.props.buttonLabel}delete</Button>
                </div>


                <div className="NoteViewName" >
                    <h2 >Note Name</h2>
                </div>
                <div className="Ipsums">
                <div className="IpsumP">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Sit amet nisl purus in mollis nunc sed id semper. Molestie ac feugiat sed lectus. Erat pellentesque adipiscing commodo elit at imperdiet dui. Egestas dui id ornare arcu odio ut sem nulla.
                    </p>
                    <div />
                    <div className="IpsumP2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget mauris pharetra et ultrices neque ornare aenean. Quis blandit turpis cursus in hac habitasse platea. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Molestie at elementum eu facilisis sed. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Habitant morbi tristique senectus et. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
                        </p>
                        </div>
                    </div>    

              
                </div>
            </div>
        );
    }
};
        
        
export default NoteView;