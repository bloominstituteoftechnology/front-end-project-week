import React, { Component } from 'react';
//import Button from './Button';
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Components.css'


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {             
            notes: [ 
            {title: 'HTML', content: 'HTML was the first week!', id: 0}, 
            {title: 'LESS', content: 'Less is more!', id: 1},
            {title: 'Javascript', content: 'asldkfjasldkj ;asldjf;alsdjf;laskdf;dfj a;ldskjfalksdf aklsdjfasdlkfj aksd flka sdflka sdflk as;dlf jalskd flk df;lkasdlfk asldkf jas;ldk falskd jflaksd flakef lawj flaks laskdf akshg laweflseiflskdnv kajsd fksjd v,jbsf,j dkfj ;lakdsjf;lakjdsfl;aksj', id: 2},
            {title: 'jQuery', content: 'I hate jQuery it\'s so old!!!  Like flip-phone old!!!!', id: 3},
                ], 
            modal: false};

            this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        return (
            <div className='TemplateContainer'>
                <div className='MarginText' >
                    <Link to={`/edit/${this.props.match.params.id}`} style={{color:'black'}}>Edit</Link>

                    <button onClick={this.toggle}                         
                      style={{
                        backgroundColor: 'transparent', 
                        border: 'none',                         
                        padding: '5px',
                        margin: '5px',
                        textAlign: 'center',
                        textDecorationLine: 'underline',
                       
                   }} >Delete</button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                        <ModalBody className='ModalDelete' >
                            <Link to='/'><button className='button' style={{background: 'red'}} onClick={this.toggle}>Delete</button> </Link>
                            <button className='button' onClick={this.toggle}>No</button>
                        </ModalBody>
                    </Modal>


                </div>


                <div className='TopText'>{this.state.notes[this.props.match.params.id].title}</div>
                <div className='BottomText'>{this.state.notes[this.props.match.params.id].content}</div>
               
                
            
            
            
            
            
            
            </div>
        );
    }
}

export default ViewNote;