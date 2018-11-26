import React from 'react';
import { connect } from 'react-redux';
import { deleteNote }from './actions';
import { Modal, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';

import styled from 'styled-components'


const SoloStyle = styled.div `
    max-width:880px;
    width:90%;
    background-color: #DDDCE1;
    height: 95vh;
    p{
        font-size:1.6rem;
    }
    a:link{
    color: black;
    text-decoration: none;
    }
    a:visited{
      color:black;
    }
`
const SoloLinks = styled.div `
    display: flex;
    justify-content: flex-end;

    a{
        font-size: 2rem;
    }
    p{
        cursor: pointer;
        font-size: 2rem;
        margin-right: 15px;
    }
`


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

    
    render(){
       const note = this.props.notes.find(item =>{
                   return item._id === this.props.match.params.id
                });
        return(
            <SoloStyle>
                <div className='modal'>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <div>
                            <p>Are you sure you want to delete this Note?</p>
                         </div>
                         <div>
                            <Button color="primary" onClick={ ()=>this.deleteHandler(note._id) }>Delete</Button>{' '}
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </div>
                    </Modal>
                </div>
                <SoloLinks>
                    <Link to={`/edit-note/${note._id}`} ><p>Edit</p></Link>
                    <p onClick={this.toggle}> Delete </p>
                </SoloLinks>
                <div className='note-body'>
                    <h1> {note.title}</h1>
                    <Markup content={note.textBody}/>
                </div>
            </SoloStyle>
        )
    }
}
const mapStateToProps = (state) =>{
        return {
            notes: state.notes
        }
}
export default connect(mapStateToProps, { deleteNote })(SoloNote); 