import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class noteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


    render(props) {
        return (
            <div>
            <container className='NVcontainer'>
            <div className='NVsidebar'>
                <div className='NVtitleContainer'>
                    <p className='NVtitle'><strong>Lambda Notes</strong></p>
                </div>
                <div>
                    <button className='NVbutton'>View Your Notes</button>
                </div>
                <div>
                    <button className='NVbutton'>+ Create New Notes</button>
                </div>
            </div>

            <div className="NVnoteContainer">
                <div className="NVheader">
                    <NavLink className="navLinkEdit"to='/createNew'><Button color="link">edit</Button></NavLink>
               
                    {/*Modal*/}
                <div>
                <Button className='navLinkDelete'color="link" onClick={this.toggle}>{this.props.buttonLabel}delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    Are you sure you want to delete this?
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Delete</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>No</Button>
                  </ModalFooter>
                </Modal>
              </div>



                </div>
                <div className="NVnoteName">
                    <p><strong>Note Name</strong></p>
                </div>
                <div className="NVparagraph">
                    <p>
                        Lion munchkin. Kitty manx so lynx. Bobcat devonshire rex american bobtail. Cougar devonshire rex cougar singapura mouser or lion. Kitty bengal donskoy lynx but tomcat. Lynx havana brown bombay persian. Savannah devonshire rex sphynx so leopard yet kitty tomcat. Savannah tom yet siberian singapura and persian but leopard for ragdoll. Cornish rex bobcat or maine coon. Kitty himalayan lion and norwegian forest singapura yet kitten yet kitten. American shorthair. Cornish rex devonshire rex but savannah leopard american shorthair. Himalayan grimalkin for tabby maine coon balinese . Tom bengal or devonshire rex. American shorthair cougar and burmese and russian blue and burmese and bengal thai. Bombay devonshire rex british shorthair yet siamese norwegian forest lion. Donskoy tomcat russian blue. Havana brown leopard so tabby so thai lion. Burmese munchkin british shorthair. American shorthair jaguar american shorthair. Norwegian forest tom and grimalkin so bobcat or leopard and siberian so egyptian mau. Ragdoll sphynx or cheetah, tom. Puma birman but devonshire rex yet ocicat and norwegian forest bengal but balinese . Cornish rex tiger grimalkin. 
                    </p>
                    <p>
                    Burmese himalayan but devonshire rex and american bobtail havana brown lynx yet manx. Birman jaguar american shorthair singapura munchkin bombay mouser. Jaguar tomcat yet tomcat. Lion balinese malkin. Tabby savannah so cornish rex ocicat so egyptian mau. Russian blue. Maine coon panther tomcat for tomcat yet cougar. Munchkin puma munchkin and tabby. Cornish rex grimalkin. Norwegian forest kitten. Abyssinian himalayan yet jaguar kitten kitten havana brown but tiger. Ragdoll scottish fold so american bobtail or lion maine coon donskoy. British shorthair. Ocelot tomcat for devonshire rex so siberian. 
                    </p>
                </div>
        
            </div>
        </container>
            </div>
        );
    }
}

{/*class noteView extends Component {
    return (
        <div>
            <container className='NVcontainer'>
                <div className='NVsidebar'>
                    <div className='NVtitleContainer'>
                        <p className='NVtitle'><strong>Lambda Notes</strong></p>
                    </div>
                    <div>
                        <button className='NVbutton'>View Your Notes</button>
                    </div>
                    <div>
                        <button className='NVbutton'>+ Create New Notes</button>
                    </div>
                </div>

                <div className="NVnoteContainer">
                    <div className="NVheader">
                        <NavLink className="navLinkEdit"to='/createNew'><strong>edit</strong></NavLink>
                    <NavLink className="navLinkDelete"to='/createNew'>
                        <strong>delete</strong>
                    </NavLink>
                    </div>
                    <div className="NVnoteName">
                        <p><strong>Note Name</strong></p>
                    </div>
                    <div className="NVparagraph">
                        <p>
                            Lion munchkin. Kitty manx so lynx. Bobcat devonshire rex american bobtail. Cougar devonshire rex cougar singapura mouser or lion. Kitty bengal donskoy lynx but tomcat. Lynx havana brown bombay persian. Savannah devonshire rex sphynx so leopard yet kitty tomcat. Savannah tom yet siberian singapura and persian but leopard for ragdoll. Cornish rex bobcat or maine coon. Kitty himalayan lion and norwegian forest singapura yet kitten yet kitten. American shorthair. Cornish rex devonshire rex but savannah leopard american shorthair. Himalayan grimalkin for tabby maine coon balinese . Tom bengal or devonshire rex. American shorthair cougar and burmese and russian blue and burmese and bengal thai. Bombay devonshire rex british shorthair yet siamese norwegian forest lion. Donskoy tomcat russian blue. Havana brown leopard so tabby so thai lion. Burmese munchkin british shorthair. American shorthair jaguar american shorthair. Norwegian forest tom and grimalkin so bobcat or leopard and siberian so egyptian mau. Ragdoll sphynx or cheetah, tom. Puma birman but devonshire rex yet ocicat and norwegian forest bengal but balinese . Cornish rex tiger grimalkin. 
                        </p>
                        <p>
                        Burmese himalayan but devonshire rex and american bobtail havana brown lynx yet manx. Birman jaguar american shorthair singapura munchkin bombay mouser. Jaguar tomcat yet tomcat. Lion balinese malkin. Tabby savannah so cornish rex ocicat so egyptian mau. Russian blue. Maine coon panther tomcat for tomcat yet cougar. Munchkin puma munchkin and tabby. Cornish rex grimalkin. Norwegian forest kitten. Abyssinian himalayan yet jaguar kitten kitten havana brown but tiger. Ragdoll scottish fold so american bobtail or lion maine coon donskoy. British shorthair. Ocelot tomcat for devonshire rex so siberian. 
                        </p>
                    </div>
                </div>
            </container>
        </div>
    );
};*/}

export default noteView;