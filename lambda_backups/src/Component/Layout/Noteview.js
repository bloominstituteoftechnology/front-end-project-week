import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Styles from '../../Styles/Noteview.css';
import Mybutton from '../Reusables/Mybutton';
import axios from 'axios'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class Noteview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        //   notes: []
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
        
      }

    //   delete(){
    //     this.props.handleDelete(this.props.note[0].id.toString());
    //   }
    //   componentDidMount() {
    //     this.fetch(this.props.match.params.id)
    //   }
    
    //   componentWillReceiveProps(newProps){
    //     if(this.props.match.params.id !== newProps.match.params.id){
    //       this.fetch(newProps.match.params.id);
    //     }
    //   }
    
    // fetch = (id) => {
    //     axios
    //       .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    //       .then(response => {
    //         this.setState(() => ({ title: response.data.title, textBody:  response.data.textBody}));
    //         console.log(response.data)
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   };


  render() {
    return (
        <div className="BigContainer">
        {console.log(this.props)}
            <div className="sidebar">
                <div className="sidebarname">
                    <h1> Lambda Notes</h1>
                </div>
                <div>
                    <Link to="/">
                        <Mybutton className="btn" text = "View your notes"/>
                    </Link>
                    <Link to="/create">
                        <Mybutton className="btn" text = "+ Create new notes"/>
                    </Link>
                </div>
            </div>

            <div className="mainbar">
                <div className="mainbarNav">
                    <Link to = {`/edit/${this.props.note[0]._id}`}>
                        edit 
                    </Link>
                    <a href = "#close" onClick={this.toggle}>delete</a>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                    <ModalBody>
                        hmm.......
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>No</Button>
                        <Link to="/">
                            <Button color="secondary" onClick={() => {
                                console.log("hr2")
                                this.props.delete(this.props.note[0]._id) }
                                }>Yes</Button>
                        </Link>
                    </ModalFooter>
                    </Modal>
                </div >

                <div className = "mainbarHeading">
                    <h2>{this.props.note[0].title}</h2>
                </div>

                <div className = "mainbarParagraph">
                    <p> {this.props.note[0].note}</p>
                    
                </div>
            </div>
      </div>
    )
  }
};
