import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './NoteView.css'

class NoteView extends Component {
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

render() {
     return (
        <div className="container-fluid mainDiv">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
          <div className="titleContainer">
         <div><h1> Lambda </h1></div> 
         <div><h1> Notes </h1></div>
          </div>
        <Link to={'/'}>  
          <div> <Button name={'View Your Notes'}/> </div>
        </Link>  
        <Link to={'/create-note'}>  
          <div> <Button name={'+Create New Notes'}/> </div>
        </Link>  
        </div>
       
        <div className="col-md-9 col-sm-12 mainDiv">

        <div><Link to={'/edit-note'}><p>edit</p></Link> 
        <p onClick={()=>{this.toggle()}}>delete</p> 
        </div>
       
         
        <h1>Note Title</h1> 
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex justo, tristique sit amet pellentesque id, maximus venenatis sapien. Pellentesque vestibulum commodo nulla, ac placerat purus auctor in. In ut aliquam nisi. Donec vitae massa odio. Nunc eu tristique mauris, finibus aliquam enim. Quisque faucibus nec nibh eu pulvinar. Integer semper urna venenatis accumsan vehicula. Etiam nec tincidunt quam, at placerat ipsum. Fusce tempor convallis iaculis. Phasellus elit massa, varius eu lorem ac, efficitur tempor augue. In eu nisl sagittis, pharetra nisi id, eleifend eros. Praesent rhoncus enim ut dignissim lacinia. Quisque vel ullamcorper ipsum. Ut in mauris libero. Ut vehicula augue imperdiet, ultricies mi sit amet, fermentum nulla.</p><br/>
        <p>Quisque sed sodales quam. Donec congue magna a massa posuere varius. Mauris placerat nulla velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur ante quam, ultricies in congue ut, faucibus sit amet dolor. Sed venenatis sem tellus, in ullamcorper velit suscipit eu. Maecenas blandit neque eget libero aliquam elementum. Phasellus vestibulum nisi sit amet velit lacinia, quis placerat metus lobortis. In finibus iaculis massa a semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ut finibus lorem, egestas varius eros. Suspendisse potenti.</p>
     
              

          
        </div>
      </div> 

      
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
          <button className="redButton" onClick={this.toggle}>Delete </button>{' '}
            <button className="blueButton" onClick={this.toggle}>No</button>
          </ModalBody>
        
        </Modal>
    </div> // end of container 


       
    
            
    );
  }  
}

export default NoteView;