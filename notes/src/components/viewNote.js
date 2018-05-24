import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './viewNote.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ViewNote extends Component {
    constructor(props) {
    super(props);
    this.state = {
        modal : false
    };

    this.toggle = this.toggle.bind(this);
}

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    };
    render() {
    return (
    <body>  
        <div className="container">
            <div className="sideBar">
                <div className="sideBarTitle">
                    <h1 className="sideBarTitle1">Lambda</h1>
                    <h1 className="sideBarTitle2">Notes</h1>
                </div>
                <Link to="/">
                <button type="button" className="viewNotesButton">
                    View Your Notes
                </button>
                </Link>
                <Link to="/createNote">
                <button type="button" className="createNoteButton">
                    + Create New Note
                </button>
                </Link>
        </div>
        <div className="mainBody">
            <Link to="/editNote">
            <button type="button" className="editButton">
            edit
            </button>
            </Link>
            <button className="deleteButton" onClick={this.toggle}>{this.props.buttonLabel}delete</button>
            <Modal className="modalBody" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader className="modalHeader" toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
            {/*<ModalBody className="modalBody">
            </ModalBody>*/}
            <ModalFooter className="modalBody">
                <Link to="/">
                <Button  className="modalDelete" onClick={this.toggle}>Delete</Button>{' '}
                </Link>
                <Button className="modalNo" onClick={this.toggle}>No</Button>
            </ModalFooter>
            </Modal>
            <h4 className="mainBodyTitle">Note Name</h4>
            <div className="noteBody">
                <p>Bacon ipsum dolor amet tail alcatra filet mignon pork loin meatloaf. Pork loin kevin beef pork 
                    chop prosciutto tenderloin filet mignon. Turducken salami tri-tip venison capicola leberkas. 
                    Bresaola pork chop picanha ground round turkey. Porchetta spare ribs ball tip ground round strip 
                    steak boudin venison kielbasa tail jerky salami shoulder shankle rump frankfurter.
                </p>
                <p> Pork chop frankfurter shoulder meatball flank, landjaeger sausage. Short loin pork loin picanha 
                    jowl beye spare ribs prosciutto turkey brisket meatball shank burgdoggen cupim ground round. Chuck 
                    shankle pork loin ribeye pork belly jerky short ribs pork porchetta flank pastrami venison sirloin. Shank pig 
                    short ribs bacon pork loin venison leberkas. Ribeye burgdoggen tongue kevin bresaola venison jerky. 
                </p>T-bone doner pastrami pancetta chuck shank cupim, frankfurter jowl alcatra ground round filet mignon.

                <p>Bacon ipsum dolor amet shankle andouille t-bone tongue chuck hamburger. Andouille meatball jowl, shankle
                    ball tip t-bone spare ribs burgdoggen short ribs. Cow kevin shankle meatball, corned beef prosciutto porchetta. 
                    Ground round salami short ribs flank picanha kielbasa pork turkey t-bone jowl turducken frankfurter tail. Tail 
                    pork chop chuck ground round, tenderloin ribeye fatback landjaeger pancetta cow pork belly meatloaf andouille. 
                    Landjaeger venison shank, fatback biltong kevin pastrami tri-tip meatball t-bone boudin. Ball tip bresaola 
                    turducken meatball, doner turkey swine pig filet mignon shoulder cupim.
                </p>
            </div>
        </div>
    </div>
    </body>
)} }    
export default ViewNote;



