import React from 'react';
import { connect } from 'react-redux';
import { deleteNote }from './actions';
import { Modal } from 'reactstrap';



class SoloNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modal: false
        }
    }
  
    toggle=()=> {
      this.setState({
        modal: !this.state.modal
      });
    }

deleteHandler=(id)=>{
    this.props.deleteNote(id);
    this.props.history.push('/');
    this.toggle()

}
// ()=>this.deleteHandler(note._id)

    
    render(){
       const note = this.props.notes.find(item =>{
                   return item._id === this.props.match.params.id
                });
        return(
            <div>
            <div className='modal'>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <div>
                    <p>Are you sure you want to delete this note?</p>
                 </div>
                 <div>
                    <button color="primary" onClick={ ()=>this.deleteHandler(note._id) }>Delete</button>{' '}
                    <button color="secondary" onClick={this.toggle}>Cancel</button>
                </div>
            </Modal>
            </div>

                <div className='solo-header'>
                    <p>edit</p>
                    <p onClick={this.toggle} >delete</p>
                </div>
                <div className='note-body'>
                    <h1> {note.title}</h1>
                    <h3>{note.textBody}</h3>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
        return {
            notes: state.notes
        }
}
export default connect(mapStateToProps, { deleteNote })(SoloNote); 