import React,{Component} from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import './noteView.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

  class NoteView extends Component{
    constructor(props){
        super(props)
        console.log("hilo", this.props.notes) 
       this.state ={
           modal: false
       }
      
    }
toggle =()=>{
          this.setState({
              modal: !this.state.modal
          });
      }


deleteAlert = (index)=>{
   
    delete this.props.notes[index]
//  alert('')

 }



render(){
return (
    <div > 
        
        { this.props.notes.map((note,index) =>{
            console.log('index',index)
             return(
            note.title === this.props.match.params.noteName ? 
          <div className='.NoteCard'>
                    <div className="Edit">
                        <Link to={`/EditCurrentNote/${index}`} className='edit'>
                            <div key={index} >Edit</div>
                        </Link>
                        {/* <Link to="/" className="delete">
                                 <div>           
                                     <div key={index} onClick={() => { this.deleteAlert(index) }}>Delete</div>
                                     
                                                                        
                                 </div>
                                


                        </Link> */}

                             <p onClick={this.toggle}>Delete</p>
                             <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>                             
                                     <ModalBody>
                                      are you sure you want to delete?
                                     </ModalBody>
                                     <ModalFooter>
                             <Link to="/">
                                     <Button color="primary" onClick={ ()=>this.deleteAlert(index)}>Delete</Button>
                             </Link>
                                     {' '}
                                     <Button color="secondary" onClick={this.toggle}>No</Button>
                                    </ModalFooter>
                             </Modal>
                    </div>

                         

                         








            <div className="noteViewCard">
                < div className="noteViewCard_title">{note.title}</div>
                <div>{note.text}</div>
            </div> 
            </div> 
        : null)} )}                        
        
     </div>
)
}
}
const mapStateToProps = (state)=>{
   console.log("filo", state.notesReducer)
    return {
        notes: state.notesReducer
    }
}
export default connect (mapStateToProps,{})(NoteView)