import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
componentDidMount 
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

render(){
    return (
        <div className='notes'>
        <Button className='modal_button' color="light" onClick={this.toggle}>{this.props.buttonLabel}delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody className='modul_body'>
           Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className='modal_footer'>
            <Button className='modal_buttons' color="danger" onClick={this.toggle}>Delete</Button>{' '}
            <Button className='modal_button_two' color="info" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
        <Link to='/editnote'><Button color="light" className='edit_button'> edit</Button></Link>
        <div className='note_page'>
        <h4 className='note_page_title'>Note Name</h4>
        <p className="note_content_body">Lorem ipsum dolor sit amet, eos id putant ponderum,
            eu sensibus intellegebat nec, ut has laoreet docendi adipiscing.
            Ea viderer meliore eam. Eam ut brute modus. Vix meis vocibus at,
            no pro facilisi adversarium. Fierent perfecto id sed, cu mei soluta
            impedit. Ludus quodsi singulis est ea, falli populo convenire mei et.
            Eos virtute nusquam ex, has affert vocent aperiam ne. Commune
            tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et.
            Volumus gubergren intellegebat ius eu, eam principes reprimique
            id. Id maiorum copiosae tractatos pri, no fabellas consequat mei,
            ut bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.
            Eos virtute nusquam ex, has affert vocent aperiam ne.</p>
            <p className="note_content_body"> Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et.
            Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, ut
            bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.
            Ne ius vitae fabulas singulis. Exerci utinam sea ei, tota oblique
            ea usu. Vix zril altera ponderum an. Cu utamur invidunt forensibus
            per. Rebum saperet vis ex, no nam dicit populo invidunt. Eam eius
            quaerendum at. Commune tacimates ut qui, inermis suavitate usu eu. Vero ignota eos et.
            Volumus gubergren intellegebat ius eu, eam principes reprimique id.
            Id maiorum copiosae tractatos pri, no fabellas consequat mei, ut
            bonorum erroribus expetendis mei. Elitr eripuit conceptam ad nam.
            Ne ius vitae fabulas singulis.</p>
            </div>
        </div>
    )
}

}
